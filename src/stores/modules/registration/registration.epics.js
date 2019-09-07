import * as Types from './registration.types';
import { Observable } from 'rxjs';
import notification from 'antd/lib/notification'

export const submitRegistrationEpic = action$ =>
  action$.ofType(Types.SUBMIT_REGISTRATION_EPIC).switchMap(action => {
    const { email, password, confirm, firstName, lastName } = action.payload
    debugger
    const requestBody = {
      query: `
          mutation {
              createUser(userInput: {
                  email: "${email}"
                  password: "${password}"
                  confirm: "${confirm}"
                  firstName: "${firstName}"
                  lastName: "${lastName}"
              }) {
                  _id
                  token
                  email
              }
          }
      `
    };
    const options = {
      method: "POST",
      url: "http://localhost:3002/graphql",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    };
    // const loading = Observable.of(submitRegistrationReading(true));
    const request = Observable.ajax(options)
      .takeUntil(action$.ofType(Types.SUBMIT_REGISTRATION_CANCEL))
      .map(result => {
        if (result.response.errors) {
          notification.error({
            message: 'Registration Failed',
            description: result.response.errors[0].message
          })
          return
        }
        notification.success({
          message: 'Registration Success',
          description: "You can now login to the system"
        })
        return
      })
      .catch(error => {
        console.log(error)
        return error
      })
    return request

  })
