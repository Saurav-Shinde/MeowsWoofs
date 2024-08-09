import React from 'react'
import"./Navbar.css"
import {Link} from "react-router-dom"
import Logo from './../../image/Logo.png'

const Navbar = () => {
  return (
   
    <div className="container">
        <div className="logo">
            <img className='logoimgs' src={Logo} alt="logo" />
        </div>
        <h1 className='heading'>Meows and Woofs</h1>
        <div className="lists">
            <li className='listitems'>
            <Link to='/'>Home</Link>
            </li>
            <li className='listitems'>
            <Link to='/contact'>Contact</Link>
            </li>
            <li className='listitems'>
            <Link to='/signin'>Sign in</Link>
            </li>
            <button className='shopbtn'>
            <Link to='/shop'>Shop now</Link>
            </button>
        </div>
    </div>
   
  )
}

export default Navbar
