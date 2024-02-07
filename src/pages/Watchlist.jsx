import React, { useEffect, useState } from 'react'
import {Card} from '../components/UI'
import { CardsContainer } from '../components'
import service from '../appwrite/config'

function Watchlist() {

  const [list, setList] = useState([])

  useEffect(() => {
    const getWatchlist = async () =>{
      const response = await service.listItems()
      setList(response.documents)
    }

    getWatchlist()
  }, [])

  return (
      <CardsContainer>
        {list.length > 0 ? <Card list={list} /> : <h1>Your Watchlist is Empty</h1>}
      </CardsContainer>
    )
}

export default Watchlist