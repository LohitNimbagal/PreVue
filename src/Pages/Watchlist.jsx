import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Components/Card/Card'

function Watchlist() {

  const list = useSelector((state) => state.watchlist)

  return (
      <div className='cardWrapper  h-screen px-40 py-2 flex flex-wrap mb-10 justify-center'>
        <Card list={list} />
      </div>
    )
}

export default Watchlist