/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {Link} from 'react-router-dom'
import {useState} from 'react'
// import Login from '../Login'
import './index.css'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    // Store user details in local storage
    localStorage.setItem(role, JSON.stringify({username, password, role}))
    alert('Sign Up Successfull')
  }
  return (
    <div className="bg-container">
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <div className="heading-container">
            <h2 className="login-heading">Sign Up</h2>
          </div>
          <div className="input-container">
            <label className="label">Username</label>
            <input
              onChange={event => setUsername(event.target.value)}
              className="input"
              type="text"
              name="login-username"
              value={username}
              required
            />
          </div>
          <div className="input-container">
            <label className="label">Password</label>
            <input
              onChange={event => setPassword(event.target.value)}
              className="input"
              type="password"
              name="login-password"
              value={password}
              required
            />
          </div>
          <div className="input-container">
            <label className="label">Role</label>
            <select
              className="input-role"
              onChange={event => setRole(event.target.value)}
              name="login-role"
              required
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="master">Master</option>
            </select>
          </div>
          <div className="button-container">
            <button className="button" type="submit">
              Sign Up
            </button>
          </div>
          <p>
            Already have an account?<Link to="/login">Login In</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
