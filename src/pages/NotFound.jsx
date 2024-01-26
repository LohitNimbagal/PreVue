import React from 'react'
import notfound from "../assets/page_not_found.png"

function NotFound() {
  return (
    <div className='w-full h-1/4 flex justify-center'>
        <img src={notfound} alt="" className='w-2/4' />

    </div>
  )
}

export default NotFound