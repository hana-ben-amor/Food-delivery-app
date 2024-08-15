import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
function FoodItem({ item }) {

  const [itemCount,setItemCount]=useState(0);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={item.image} alt={item.name} />
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{item.name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">
          {item.description}
        </p>
        <div className="add-to-cart">
        <p className="food-item-price">
            ${item.price}
        </p>
          <div>
            {
              !itemCount
              ?<img className="add-to-cart" onClick={()=>setItemCount((prev)=>prev+1)} src={assets.add_icon_white} alt="" />
              :
              <div className="icons">
                  <img onClick={()=>setItemCount((prev)=>prev-1)} src={assets.remove_icon_red} alt="" />
                  <p>{itemCount}</p>
                  <img onClick={()=>setItemCount((prev)=>prev+1)} src={assets.add_icon_green} alt="" />

              </div>
            }
          </div>
        </div>
         
      </div>

    </div>
  );
}

export default FoodItem;
