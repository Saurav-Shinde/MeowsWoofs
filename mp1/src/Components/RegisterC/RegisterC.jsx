import React from 'react'
import "./RegisterC.css"
import { Link } from 'react-router-dom'

const RegisterC = () => {
    return (
      <div className="Rcontainer">
        <div className="Rmain">
          <h1 className='Heading'>Sign up</h1>
          <div className="name">
          <p>Full Name</p>
            <input type="text" name="" id="register" />
          </div>
          <div className="username">
            <p>Email</p>
            <input type="email" name="" id="register" />
          </div>
          <div className="password">
            <p>Password</p>
            <input type="password" name="" id="register" />
          </div>
          <div className="phone">
            <p>Contact no.</p>
            <input type="password" name="" id="register" />
          </div>

         <button className='createbtn'> <Link to={'/Signin'}>Create Account</Link></button>
            
          <p className='text'>Already have an account? <Link to='/signin' ><a href="/register">Sign in</a></Link></p>
        </div>
      </div>
    )
  }
export default RegisterC