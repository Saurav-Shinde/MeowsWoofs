import React from 'react'
import "./SignC.css"
import {Link} from "react-router-dom"

const SignC = () => {
  return (
    <div className="scontainer">
      <div className="smain">
        <h1 >Sign in</h1>
        <div className="form">
          <p className='formtext'>Username</p>
          <input type="email" name="" id="box" />
          <br />
          <p className='formtext'>Password</p>
          <input type="password" name="" id="box" />
          <br />
          <br />
        </div>
        <div className="login">
            <button className='loginbtn'><Link to={'/shop'}>Login</Link></button>
            
            <p className='fpassword'>Forgot password?</p>
            
            <p className='registertext'>Don't have an account?  <Link to="/register">Sign up here.</Link></p>

          </div>
      </div>
    </div>
  )
}

export default SignC