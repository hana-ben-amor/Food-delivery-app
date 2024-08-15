import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { useContext,useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
function FoodItem({ item }) {
  const {cartItems,addToCart,removeFromCart} =useContext(StoreContext);

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
              !cartItems[item._id]
              ?<img className="add" onClick={()=>addToCart(item._id)} src={assets.add_icon_white} alt="" />
              :
              <div className="icons">
                  <img onClick={()=>removeFromCart(item._id)} src={assets.remove_icon_red} alt="" />
                  <p>{cartItems[item._id]}</p>
                  <img onClick={()=>addToCart(item._id)} src={assets.add_icon_green} alt="" />

              </div>
            }
          </div>
        </div>

      </div>

    </div>
  );
}

export default FoodItem;
