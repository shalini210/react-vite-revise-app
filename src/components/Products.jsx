import React, { useEffect, useState } from 'react'
import prdts from './productsdata'
import { Link, useParams } from 'react-router';
import Rating from './Rating';
import { CartContext } from '../context/Cartcontext';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import ItemCounter from './ItemCounter';
export default function Products() {
    let params = useParams()
    
 
    var category=params.category
 
    const User = useContext(UserContext)
    const [productsui,setproductsui ] = useState();
    let Cart = useContext(CartContext)
    useEffect(()=>
    {
        console.log(Cart.items)
        let ui = prdts.map((p)=>
        {
            if(Object.keys(params).length === 0)
            {
                return <div className='hover:shadow-2xl flex flex-col h-64 w-64 gap-2 text-center items-center'>
                <img src={p.img} alt="" className='w-1/2 aspect-square' />
                <Rating n={p.rating}></Rating>
                <div className='text-xl font-bold' >{p.name}</div>
                <div><ItemCounter pid={p.id}></ItemCounter></div>
                <div><Link to={"/productdetails/"+p.id} 
                className='px-6 py-2 bg-blue-500 border-2 text-white border-orange-200 border-double'>View Details</Link></div>
            </div>
            }
            else
            {
            if(p.category==category)
            {
            return <div className='hover:shadow-2xl flex flex-col h-64 w-64 gap-2 text-center items-center'>
                <img src={p.img} alt="" className='w-1/2 aspect-square' />
                <Rating n={p.rating}></Rating>
                <div className='text-xl font-bold' >{p.name}</div>
                <div><ItemCounter pid={p.id}></ItemCounter></div>
                <div><Link to={"/productdetails/"+p.id} 
                className='px-6 py-2 bg-blue-500 border-2 text-white border-orange-200 border-double'>View Details</Link></div>
            </div>
            }
        }
            
        })
      
        setproductsui(ui)
    },[])
  return (
    <>
    <h1>Welcome : {User.username}</h1>
    <div className='flex flex-wrap'>
        
        {productsui}
    </div>
    </>
    
  )
}
