import React from 'react'
import { useSelector } from 'react-redux'
import LogoutR from './LogoutR'
import LoginR from './LoginR'
export default function HomeR() {
    let islogin=useSelector((obj)=>obj.user.islogin)
  return (
    <div>
        {islogin?<LogoutR></LogoutR>:<LoginR></LoginR>}
    </div>
  )
}
