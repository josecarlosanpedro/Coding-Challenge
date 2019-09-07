import { combineEpics } from 'redux-observable';
import * as Registration from './modules/registration/registration.epics';
import 'rxjs'

const rootEpic = combineEpics(
  Registration.submitRegistrationEpic,
);

export default rootEpic;
