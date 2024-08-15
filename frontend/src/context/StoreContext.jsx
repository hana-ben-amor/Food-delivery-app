import { createContext } from "react"
import { food_list } from "../assets/assets"
import { useState,useEffect} from "react"
export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{
    const [cartItems,setCartItems]= useState({});

    //when the cart items will be updated we will show the cart items state
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const addToCart=(itemId)=>{
        if(cartItems[itemId]){
            setCartItems((cartItems)=>({...cartItems,[itemId]:cartItems[itemId]+1}))
        }else{
            setCartItems((cartItems)=>({...cartItems,[itemId]:1}))
        }
    }

    const removeFromCart=(itemId)=>{

            setCartItems({...cartItems,[itemId]:cartItems[itemId]-1})
    
    }
    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;