
import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import Spin from 'antd/lib/spin';
import isEmpty from 'lodash/isEmpty'
import { getUserId } from '../../utils'

const propTypes = {
  services: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};
const Login = props => {

  const { services, user } = props
  useEffect(() => {
    services.getUserDetailsEpics(getUserId());
  }, []);
  return (
    <section className="home-section">
      {isEmpty(user) && <Spin />}
      <h1>Profile</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
    </section>
  )
}

Login.propTypes = propTypes;
export default Login
