import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
export default function Rating(props) {
    let total = props.n;
   let  fullstars=parseInt(total);
 let    halfstars =(total %parseInt(total))>0?<FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>:"";
let ui = []
    for(var i=1;i<=fullstars;i++)
    {
        ui.push(<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>)
    }
    ui.push(halfstars)
    ;
  return(
    <div className='text-yellow-400'>{(ui)}</div>
  )
}
