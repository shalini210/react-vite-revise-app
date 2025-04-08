import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './Counterslice'
export default function Forincrement() {
    let count = useSelector((data)=>data.counter.value)
    let dispatch = useDispatch();
    let inc = ()=>
    {
      dispatch(increment())
    }
    let dec=()=>
    {
      dispatch(decrement())
    }
  return (
    <div>
      <input type="button" value="-" onClick={()=>dec()} /> {count} 
    <input type="button" value="+" onClick={()=>inc()} /></div>
  )
}
