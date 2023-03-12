// import React from "react"
import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="home-container">
    <h1 className="welcome-heading">Welcome to Spritle</h1>
    <div className="sign-login-container">
      <Link to="/signup" className="button">
        Sign Up
      </Link>
      <Link to="/login" className="button">
        Login
      </Link>
    </div>
  </div>
)

export default Home
