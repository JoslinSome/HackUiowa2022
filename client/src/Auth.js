import React, { useState } from "react"
import { Form, Button } from 'react-bootstrap';
import './components.css'
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

    const navigate = useNavigate();

  const handleLogin = event => {
    event.preventDefault();
    // fetch(`http://localhost:4000/create-user?name=${name}&userName=${userName}&password=${password}`)
    //     .catch(err => console.error(err))
    // 👇️ redirect to /contacts
   navigate('/');
  };

  const handleSignUp = event => {
    event.preventDefault();
    // fetch(`http://localhost:4000/create-user?name=${name}&userName=${userName}&password=${password}`)
    //     .catch(err => console.error(err))
    // 👇️ redirect to /contacts
   navigate('/LoginSpotify');
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Username: </label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password: </label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" onClick={handleLogin} className="btn btn-primary submit-btn">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={(event)=> setName(event.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(event)=> setUserName(event.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(event)=> setPassword(event.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary submit-btn" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}