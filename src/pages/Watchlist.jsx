import React from 'react'
import { useSelector } from 'react-redux'
import {Card} from '../components/UI'

function Watchlist() {

  const list = useSelector((state) => state.watchlist)

  return (
      <div className='cardWrapper h-full px-40 py-2 flex flex-wrap mb-10 justify-center'>
        <h1 className='text-2xl'>Comming Soon</h1>
        {/* <iframe src="https://giphy.com/embed/i3pcjHEhX9HsCgFFUn" width="800" height="300"  ></iframe> */}
      </div>
    )
}

export default Watchlist