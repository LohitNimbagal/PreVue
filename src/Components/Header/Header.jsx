import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../../Store/searchtermSlice'
import { useNavigate } from 'react-router-dom'


function Header() {

  const dispatch = useDispatch()
  const nagivate = useNavigate()

  const handelAddSearchterm = (searchTerm)=>{
    console.log(searchTerm);
    dispatch(add(searchTerm))
  }


  return (
    <>
    <div className='Header-wrapper bg w-full px-14 py-1 flex justify-between items-center'>

        <Link to='/'><img src="src/Assets/logo.png" alt="logo" className='w-14'/></Link>

        <input type="text" className='rounded-2xl h-8 p-1 text-center text-xs w-40' placeholder='Enter your Keywords here' onKeyDown={(e)=>{
          if (e.key === "Enter") {
            handelAddSearchterm(e.target.value)
            nagivate("/searchlist")
          }
        }}/>

        <Link to='/watchlist'><img src="src/Assets/user.png" alt="logo" className='w-10 h-10'/></Link>

    </div>


    </>
  )

  
}

export default Header