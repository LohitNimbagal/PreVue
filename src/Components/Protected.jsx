import React from 'react'
import authSlice from '../Store/authSlice'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

function Protected({children, authentication = true}) {

    const navigate = useNavigate();
    const authStatus = useSelector((state)=> state.auth.status)
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        if(authentication){
            if (authentication && authStatus !== authentication) {
                navigate("/login")
              } else if (!authentication && authStatus !== authentication ){
                navigate("/")
              }
            }
        setLoader(false)
    },[authStatus, authentication, navigate])

  return loader ? "Loading....." : <>{children}</>
}

export default Protected