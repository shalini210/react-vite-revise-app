import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/Cartcontext';
import prdts from './productsdata';
export default function ItemCounter(params) {
    const[qty,setqty] = useState()
    let pid = params.pid;
    let Cart = useContext(CartContext);
    const [productInfo,setProductInfo] = useState(prdts.find((p)=>p.id == pid))
    const [index,setindex] = useState(Cart.items.findIndex((p)=>p.id==pid))
    let counterui = <div  className='flex gap-3 px-6 py-2 bg-orange-500 border-2 text-white border-orange-200 border-double'> <input type="button" value="-" className='w-6' onClick={()=>removeItem()}/> {qty} 
    {(qty<5)?<input type="button" value="+" onClick={()=>addItem()} className='bg-blue-400 w-6' />:<input className='bg-gray-400 w-6' type="button" value="+" disabled />}
    </div>
    console.log(index +" from iten counter")
    useEffect(()=>
    {
      setindex(Cart.items.findIndex((p)=>p.id==pid))
      if(index>-1)
      {
        setqty(Cart.items[index].qty)
      }
      console.log("in effect")
    },)
    let addItem = ()=>
    {
            let newqty = qty+1;
            setqty(newqty);
            Cart.items[index].qty = newqty

    }
    let removeItem = ()=>
        {
                let newqty = qty-1;
               
                if(newqty ==0)
                {
                  setqty(newqty);
                    Cart.items.splice(index,1)
                    Cart.setitems(Cart.items)
                    setindex(Cart.items.findIndex((p)=>p.id==pid))
                }
                else
                {
                  setqty(newqty);
                  Cart.items[index].qty = newqty
               
                }
                
                console.log("index is "+index)
             
                console.log(Cart.items)
                Cart.setitems(Cart.items)
    
        }


        let addtocart=()=>
          {
          
            Cart.items.push({id:productInfo.id,itemname:productInfo.title,price:productInfo.price,qty:1})
            let i = Cart.items.findIndex((p)=>p.id==productInfo.id)
            setindex(i)
            
          }
  return (
  index < 0 ?  <input type="button" value="Add to cart"  className='px-6 py-2 bg-orange-500 border-2 text-white border-orange-200 border-double' onClick={()=>addtocart()}/>:counterui

  )
}
