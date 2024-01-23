import React from 'react'

function CardsContainer({children}) {
  return (
    <div className='mt-5 flex gap-5 flex-wrap items-center justify-center lg:mt-10'>
        {children}
    </div>
  )
}

export default CardsContainer