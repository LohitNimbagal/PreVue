import React, { useState } from 'react'
import more from "../../assets/more.png"


function More() {

  return (
    <div>
        <img src={more} alt="menu" className='w-5 h-5 m-2  lg:hidden'/>
    </div>
  )
}

export default More