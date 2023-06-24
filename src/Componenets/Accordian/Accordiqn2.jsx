import React from 'react'
import { useState } from 'react'

const Accordiqn2 = ({heading,}) => {
    const [click,setclick]=useState(false)
  return (
    <div className='accordian'>
    <div className='bg-white d-flex space-between'>{heading} <button className='btn btn-transparent' onClick={()=>{setclick(!click)}}>{click?"+":"-"}</button></div>

    </div>
  )
}

export default Accordiqn2