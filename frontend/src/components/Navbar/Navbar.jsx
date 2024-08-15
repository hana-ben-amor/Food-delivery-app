import React from 'react'
import './Navbar.css'
import {assets} from "../../assets/assets"
import { useState } from 'react'

const Navbar = ({setShowLogin}) => {

  // we will create a state variable for underline items in menu
  const[menu,setMenu]=useState("home")

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className="navbar-menu">
          <a href='#' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</a>
          <a href="#menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
          <a href="#mobile-app" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
          <a href="#contact" onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>contact us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-basket-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>

        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
