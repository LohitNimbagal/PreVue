import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../features/authSlice'
import { search } from '../features/searchSlice'


function Header() {

  const dispatch = useDispatch()
  const nagivate = useNavigate()
  
  const authStatus = useSelector((state)=> state.auth.status)

  const handelAddSearchterm = (searchTerm)=>{
    console.log(searchTerm);
    dispatch(add(searchTerm))
  }

  const handleLogout = () => {
    authService.logout().then(()=>{
      dispatch(logout())
    })
  }

  const navItems = [
    // {
    //   name: "Home",
    //   path: "/",
    //   active: true
    // },
    // {
    //   name: "Favorite",
    //   path: "/",
    //   active: authStatus
    // },
    {
      name: "Watchlist",
      path: "/watchlist",
      active: true
    },
    {
      name: "Login",
      path: "/login",
      active: !authStatus,
      actionBtn: true
    },
    {
      name: "Signup",
      path: "/signup",
      active: !authStatus,
      actionBtn: true
    },
  ]

  return (
    <>
    <div className='Header-wrapper w-full px-8 py-1 flex justify-between items-center'>

        <Link to='/'><img src="src/Assets/logo.png" alt="logo" className='logoImg'/></Link>

        <input type="text" className='rounded-2xl h-8 p-1 mr-4 text-center text-xs w-48 outline-none' placeholder='Search for Movies and TV Shows' onKeyDown={(e)=>{
          if (e.key === "Enter") {
            dispatch(search(e.target.value))
            // handelAddSearchterm(
            nagivate("/search")
          }
        }}/>


        <ul className='flex gap-3 text-sm items-center'>

          {navItems.map((item) => {
            if (item.active && item.actionBtn){
              return(
                <li key={item.name}>
                  <button key={item.name} onClick={()=> nagivate(item.path)} className='inline-bock duration-500 bg-blue-400 text-sm p-1 px-2 rounded-sm '>
                    {item.name}
                  </button>
              </li>
              )
            }else if (item.active) {
              return (
                <li key={item.name}>
                  <button key={item.name} onClick={()=> nagivate(item.path)} className='p-1 hover:bg-white hover:bg-opacity-30 hover:backdrop-blur-xl rounded-sm'>
                    {item.name}
                  </button>
                </li>
                )
              }

          }
          )}

           {authStatus && (
            <button className='inline-bock duration-500 bg-blue-400 text-sm p-1 px-2 rounded-sm ' onClick={handleLogout}>
              Logout
            </button>
           )}
        </ul>

        {/* <Link to='/watchlist'><img src="src/Assets/user.png" alt="logo" className='w-10 h-10'/></Link> */}

    </div>


    </>
  )

  
}

export default Header