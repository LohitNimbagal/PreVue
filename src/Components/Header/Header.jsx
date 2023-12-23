import React from 'react'
import { useState, useEffect } from 'react'

function Header() {


  return (
    <>
    <div className='Header-wrapper bg-cyan-600 w-full px-14 py-1 flex justify-between items-center'>

        <img src="src/Assets/logo.png" alt="logo" className='w-14'/>

        <input type="text" className='rounded-2xl h-8 p-1 text-center text-xs w-40' placeholder='Enter your Keywords here' />

        <img src="src/Assets/user.png" alt="logo" className='w-10 h-10'/>
    </div>
    </>
  )
}

export default Header