import React from 'react'

function Footer() {
  return (
    <>
    <div className='footerWrapper bg-cyan-600 h-12
    w-full fixed bottom-0 flex flex-col text-center'>

        <p className='text-sm font-bold'>
        Special thanks to OMDB API for powering our movie data.
        </p>
        
        <p className='text-xs mt-3'>🎬 PreVue Productions © 2023</p>

    </div>
    </>
  )
}

export default Footer