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
        <Card list={list} />
      </CardsContainer>
    )
}

export default Watchlist