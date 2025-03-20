import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import prdts from './productsdata'

export default function ProductsDetails() {
    let params = useParams()
    let pid = params.pid
    const [productInfo,setProductInfo] = useState(prdts.find((p)=>p.id == pid))
    let imgref = useRef()
  return (
    
    <div className='flex'>
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
                </div>
        </div>
        <div className='w-1/2'>

        </div>
    </div>
  )
}
