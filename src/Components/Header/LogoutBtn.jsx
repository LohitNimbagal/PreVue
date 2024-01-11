import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../Store/authSlice'
// import Button from '../Button'
import authService from '../../appwrite/auth'

function LogoutBtn() {

    const dispatch = useDispatch()

    const handleLogout = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }

  return (
    <>
    <button className='inline-bock duration-200 hover:bg-blue-400 text-sm p-1 font-bold rounded-md' onClick={handleLogout}>
        Logout
    </button>
    </>
  )
}

export default LogoutBtn