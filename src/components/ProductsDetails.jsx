import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import prdts from './productsdata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/Cartcontext';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext'
import Rating from './Rating'
export default function ProductsDetails() {
  const User = useContext(UserContext)
  const Cart = useContext(CartContext)
    let params = useParams()
    let pid = params.pid
    const [productInfo,setProductInfo] = useState(prdts.find((p)=>p.id == pid))
    let imgref = useRef()
    let addtocart=()=>
    {
      let index =  Cart.items.findIndex((p)=>p.id == pid);
      console.log(index)
      if(index <0)
      {
      Cart.items.push({id:productInfo.id,itemname:productInfo.title,price:productInfo.price,qty:1})
      }
      else
      {
        Cart.items[index].qty = Cart.items[index].qty +1
      }
      console.log(Cart.items)
    }
  return (
    <> 
    <h1>Welcome : {User.username}</h1>
    <div className='flex'>
      <p className='text-9xl'>
    
      </p>
        <div className='flex w-1/2'>
                <div className='flex flex-col'>
                    {productInfo.additionalImages.map((i)=>{
                   return   <img src={i} 
                    onClick={()=>imgref.current.src =i}   alt="" className='border-1 h-16 w-16' />
                    })
                    }                  
                </div>
                <div>
                    <img src={productInfo.img}  ref={imgref}
                     className="border-1 h-full w-64" alt="" />
                     <div className='flex gap-4'>Ratings :<Rating n={productInfo.rating}></Rating></div>
                </div>
        </div>
        <div className='w-1/2'>
                    <input type="button" value="Add to Cart" onClick={()=>addtocart()} className='bg-orange-400
                    ' />
        </div>
    </div>
    </>
  )
}
