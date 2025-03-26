import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import prdts from './productsdata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/Cartcontext';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext'
import Rating from './Rating'
import ItemCounter from './ItemCounter'
export default function ProductsDetails() {
  const User = useContext(UserContext)
  const Cart = useContext(CartContext)
    let params = useParams()
    let pid = params.pid
    const [productInfo,setProductInfo] = useState(prdts.find((p)=>p.id == pid))
    const [index,setindex] = useState(Cart.items.findIndex((p)=>p.id==pid))
  
    let imgref = useRef()
   
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
      <ItemCounter pid={pid}></ItemCounter>
                    
        </div>
    </div>
    </>
  )
}
