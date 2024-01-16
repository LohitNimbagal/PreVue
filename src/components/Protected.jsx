import React from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import authService from '../appwrite/auth'

function Protected({children, authentication = true}) {

    const navigate = useNavigate();
    const authStatus = useSelector((state)=> state.auth.status)
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
            if (authentication && authStatus !== authentication) {
                navigate("/login")
              } if (!authentication && authStatus !== authentication ){
                navigate("/")
              }
        setLoader(false)
    },[authStatus, authentication, navigate])


  return loader ? "Loading....." : <>{children}</>
}

export default Protected