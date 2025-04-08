import React from 'react'
import { useSelector } from 'react-redux'
export default function Showcount() {
    let count = useSelector((data)=>data.counter.value)
  return (
    <div>count is :{count}</div>
  )
}
