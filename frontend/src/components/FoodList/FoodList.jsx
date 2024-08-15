import React, { useContext } from 'react'
import './FoodList.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
function FoodList({category}) {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-list' id='food-list'>
    <h2>Top dishes near you</h2>
    <div className="food-display-list">
      {food_list.map((item, index) => {
        if(category==="All" || category ===item.category){
          return <FoodItem item={item} id={item.id} key={index}/>
        }
      })}
    </div>
    </div>
  )
}

export default FoodList
