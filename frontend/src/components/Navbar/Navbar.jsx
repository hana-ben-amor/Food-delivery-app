import React from 'react'
import './Navbar.css'
import {assets} from "../../assets/assets"
import { useState } from 'react'

const Navbar = () => {

  // we will create a state variable for underline items in menu
  const[menu,setMenu]=useState("home")

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className="navbar-menu">
          <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
          <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
          <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
          <li onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>contact us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-basket-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>

        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
