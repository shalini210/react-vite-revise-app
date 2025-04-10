import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutaction } from './Userslice'
import { useNavigate } from 'react-router'
export default function LogoutR() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let islogin = useSelector((obj)=>obj.user.islogin)
   useEffect(()=>
{
    if(!islogin)
        {
            navigate("/")
        }
},[])
  return (
    <div>LogoutR
        <input type="button" value="Logout" onClick={()=>dispatch(logoutaction())} />
    </div>
  )
}
