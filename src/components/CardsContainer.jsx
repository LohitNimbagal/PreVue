import React, { Children } from 'react'

function CardsContainer({children}) {
  return (
    <div className='flex gap-5 flex-wrap items-center justify-center lg:mt-10'>
        {children}
    </div>
  )
}

export default CardsContainer