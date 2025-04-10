import React, { useState } from 'react'
import { useRef } from 'react'
import { loginaction } from './Userslice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
export default function LoginR() {
    let islogin = useSelector((obj)=>obj.user.islogin)
    let navigate = useNavigate()
    if(islogin)
    {
        navigate("/")
    }
    let dispatch = useDispatch()
let usernameref = useRef()
let pwdref = useRef()
const [msg,setmsg] = useState("")
let setlogin=()=>
{
    if(usernameref.current.value=="admin" && pwdref.current.value=="123")
    {
        //logged in case
        dispatch(loginaction())

    }
    else
    {
        setmsg("invalid user")
    }
}
let empty = ()=>
{
usernameref.current.value=""
pwdref.current.value=""
setmsg("")
}
  return (
    <div>Login:
        <p>username: <input type="text" ref={usernameref} className='border'/></p>
        <p>password: <input type="text" ref={pwdref} className='border'/></p>
        <input type="button" value="login" onClick={()=>setlogin()}/>
        <input type="button" value="Cancel" onClick={()=>empty()}/>
        <p>{msg}</p>
    </div>
  )
}
