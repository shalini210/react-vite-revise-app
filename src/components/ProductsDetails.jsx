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
                 
                 
                 <div className='grid grid-cols-2'>
                  <div>  name: {productInfo.name}</div>
                  <div>  company: {productInfo.company}</div>
                  <div>  price: {productInfo.price}</div>
                     <div>brand:{productInfo.brand}</div>
                      {/* brand: "Wohn Wunder",
                      modelno: "OTF25 ",
                      title: "WohnWunder Oscillating Tower Fan 25",
                      coloroptions: ["Red", "blue", "pink"],
                      originalprice: "5999",
                      discountedprice: "1799",
                      modelseries: "OTF Series",
                      weight: "12kgs",
                      dimensions: "80 cm x 50 cm x 70 cm",
                      type: "Desert",
                      category:"Cooler and Fans",
                      keyfeatures: ["Blade Sweep: 50 mm","Design: Premium","Ultra High Speed" ],
                      des: "WohnWunder is a brand that believes in delivering products with unmatched quality and performance. Cooldown this summer with the WohnWunder Tower Fan. The fan comes in a modern elegant design and delivers you the best and cool air. The color and the design of the fan blends in well with the interiors of all kinds of houses. The glorious Fans nestled at your home and gives elegant look And Complete Decoration to your Room Sleek and Stylish Design",
                      rating:3.5,
                      additionalImages:[cooler2_1,cooler2_2,cooler2_3,cooler2_4]</div> */}
                 </div>

        </div>
    </div>
    </>
  )
}
