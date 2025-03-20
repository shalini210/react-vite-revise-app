import React, { useEffect, useState } from 'react'
import prdts from './productsdata'
import { Link } from 'react-router';
export default function Products() {
    const [productsui,setproductsui ] = useState();
    useEffect(()=>
    {
        let ui = prdts.map((p)=>
        {
            return <div className='flex flex-col h-64 w-64 gap-4'>
                <img src={p.img} alt="" className='w-1/2 aspect-square' />
                <div className='text-xl font-bold' >{p.name}</div>
                <div><Link to={"/productdetails/"+p.id}>View Details</Link></div>
            </div>
        })
        setproductsui(ui)
    },[])
  return (
    <div className='flex flex-wrap'>
        {productsui}
    </div>

    
  )
}
