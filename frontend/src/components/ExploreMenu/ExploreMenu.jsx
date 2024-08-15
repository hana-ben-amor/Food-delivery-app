import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
function ExploreMenu({category,setCategory}) {
return(
  <div className="explore-menu" id='explore-menu'>
    <h1>Explore our menu</h1>
    <div className="explore-menu-list">
        {menu_list.map((menu,index) => (
          <div onClick={()=>{setCategory(prev=>prev===menu.menu_name?"All":menu.menu_name)
          }} key={index} className='menu-item'>
            <img className={category===menu.menu_name?"active":""} src={menu.menu_image} alt=""/>
            <p>{menu.menu_name}</p>
          </div>
        ))}
    </div>
    <hr/>
  </div>
  )
}

export default ExploreMenu
