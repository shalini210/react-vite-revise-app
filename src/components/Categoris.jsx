import React, { useEffect, useState } from 'react'
import prdts from './productsdata'
import { Link } from 'react-router';

export default function Categoris() {
var categories =[];
const [categoriesUI,setcategoriesUI] = useState("");
useEffect(()=>
{
  prdts.map((p)=>
    { 
      // if(!categories.find((c)=>{c.categoryp.category}))
      if(categories.findIndex((c)=>c.category == p.category)<0)
      {
        categories.push({category:p.category,img:p.img})  
      }
    })

   let x =  categories.map((c)=>
    {
      return <div className='p-4 w-48'>
        <img src={c.img} alt="" />
        <div>{c.category}</div>
        <Link to={"products/"+c.category}>View all </Link>
      </div>
    })
    setcategoriesUI(x)
},[])
    //  var dcategories = prdts.map((p)=>dcategories.includes(p.category)) 
  return (
    <>
    <div>Categories</div>
    <div className='grid grid-cols-3'>
      {categoriesUI}
    </div>
    </>
  )
}
