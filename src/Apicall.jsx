import React from 'react'
import { useState } from 'react'

export default function Apicall() {
    const [ui,setui]= useState([]);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => 
        {
         let d = json.map((obj)=>
        {
    let cname = "orange"
    if(obj.completed)
    {
        cname="greenyellow"
    }
    // (obj.completed)?cname="greenyellow":cname= "orange"
    return     <tr key={obj.id} style={{backgroundColor:cname}}><td className='border'>
        {obj.title}</td>
    <td className='border'>{(obj.completed)?"Completed":"Pending"}</td></tr>
        })
        setui(d)
    })
  return (
    <>
    <div>Apicall</div>
    <table>
        <thead><tr><th>Taskname</th>
        <th>Task Status</th></tr></thead>
        <tbody>
            {ui}
        </tbody>
    </table>
    </>
  )
}
