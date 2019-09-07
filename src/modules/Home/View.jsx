
import React, { useEffect } from 'react'
import { getUserId } from '../../utils'
const Login = props => {
  const { services, user } = props
  useEffect(() => {
    services.getUserDetailsEpics(getUserId());
  }, []);
  return (
    <section className="home-section">
      {user.email}
    </section>
  )
}

export default Login
