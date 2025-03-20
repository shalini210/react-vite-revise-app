import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router'
import Products from './components/Products'
import ProductsDetails from './components/ProductsDetails'
function App() {
 

  return (
    <>
      <div className=''>
        <Routes>
          <Route path="/" element={<Products></Products>}></Route>
          <Route path='/productdetails/:pid' element={<ProductsDetails></ProductsDetails>}></Route>
        </Routes>
        </div>
    </>
  )
}

export default App
