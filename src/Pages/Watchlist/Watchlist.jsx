import React from 'react'
import { useSelector } from 'react-redux'
import WatchlistCard from '../../Components/WatchlistCard/WatchlistCard'

function Watchlist() {

  const list = useSelector((state) => state.watchlist)

  return (
      <div className='cardWrapper  h-screen px-40 py-2 flex flex-wrap mb-10 justify-center'>
        <WatchlistCard list={list} />
      </div>
    )
}

export default Watchlist