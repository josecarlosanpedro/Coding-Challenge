import React, { useState } from 'react'
import withRouter from 'react-router-dom/withRouter';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { history } = props
  const handleLogin = e => {
    e.preventDefault();
  }
  console.log(props)
  const handleChangeEmail = event => {
    setEmail(event.target.value)
  }
  const handleChangePassword = event => {
    setPassword(event.target.value)
  }
  const handleRegister = () => {
    history.push("registration")
  }
  return (
    <section className="login-form-section">
      <form onSubmit={handleLogin}>
        <label className="_spacer-sm">
          Email:
        </label>
        <input className="_spacer-sm" type="email" onChange={handleChangeEmail} />
        <label className="_spacer-sm">
          Password:
        </label>
        <input className="_spacer-sm" type="password" onChange={handleChangePassword} />
        <button className="_spacer-sm login-button" type="submit">Submit</button>
        <button className="_spacer-sm register-button" onClick={handleRegister}>Register</button>
      </form>
    </section>
  )
}

export default withRouter(LoginForm)
