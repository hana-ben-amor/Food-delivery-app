// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import LoginPopup from './components/LoginPopup/LoginPopup'
const App = () => {
  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin
      ?<LoginPopup setShowLogin={setShowLogin}/>
      :<></>
    }
    <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
    </div>
    </>
  )
}

export default App
