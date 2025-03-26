import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route,Routes } from 'react-router'
import Products from './components/Products'
import ProductsDetails from './components/ProductsDetails'
import Rating from './components/Rating'
import { CartContext } from './context/Cartcontext'
import { UserContext } from './context/UserContext'
import Cart from './components/Cart'
function App() {
 
const [masterItems,setMasterItems] = useState([])
  return (
    <>
    <UserContext.Provider value={{username:"John"}}>
      {/* <CartContext.Provider value={{items:[]}}> */}
<CartContext.Provider value={{items:masterItems,setitems:setMasterItems}}>
      <div className=''>
      <Link to="/" className='underline'>Products</Link>
        <Link to="/cart" className='underline'>Go to Cart</Link>
        
        <Routes>
          <Route path="/" element={<Products></Products>}></Route>
          <Route path='/productdetails/:pid' element={<ProductsDetails></ProductsDetails>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
        </div>
        </CartContext.Provider>
        </UserContext.Provider>
    </>
  )
}

export default App
