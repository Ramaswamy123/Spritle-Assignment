/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {Redirect, Link} from 'react-router-dom'
import {useState} from 'react'

import './index.css'

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [studentAuth, setStudentAuth] = useState(false)
  const [masterAuth, setMasterAuth] = useState(false)

  const onClickLoginForm = event => {
    event.preventDefault()
    const data = JSON.parse(localStorage.getItem(role))

    console.log(data)
    if (
      data.username === name &&
      data.password === password &&
      data.role === 'student'
    ) {
      alert('Login Successfull')
      setStudentAuth(true)
    }
    if (
      data.username === name &&
      data.password === password &&
      data.role === 'master'
    ) {
      alert('Login Successfull')
      setMasterAuth(true)
    } else if (data === null) {
      alert('User Details Not Exists')
    }
  }
  if (studentAuth) {
    return <Redirect to="/student" />
  }

  if (masterAuth) {
    return <Redirect to="/master" />
  }

  return (
    <div className="bg-container">
      <div className="login-container">
        <form onSubmit={onClickLoginForm}>
          <div className="heading-container">
            <h2 className="login-heading">Log In</h2>
          </div>
          <div className="input-container">
            <label className="label">Username</label>
            <input
              className="input"
              onChange={e => setName(e.target.value)}
              type="text"
              value={name}
              name="login-username"
              required
            />
          </div>
          <div className="input-container">
            <label className="label">Password:</label>
            <input
              className="input"
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              name="login-password"
              required
            />
          </div>
          <div className="input-container">
            <label className="label">Role</label>
            <select
              className="input-role"
              name="login-role"
              onChange={e => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="master">Master</option>
            </select>
          </div>
          <div className="button-container">
            <button className="button" type="submit">
              Log In
            </button>
          </div>
          <p className="paragraph">
            Dont have an account <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
