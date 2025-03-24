import React, { useContext } from 'react'
import { CartContext } from '../context/Cartcontext'
export default function Cart() {
    let Cart = useContext(CartContext)
  return (
    <div>Cart: {JSON.stringify(Cart.items)}</div>
  )
}
