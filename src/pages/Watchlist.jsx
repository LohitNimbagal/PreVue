import React from 'react'
import { useSelector } from 'react-redux'
import {Card} from '../components/UI'
import { CardsContainer } from '../components'

function Watchlist() {

  const list = useSelector((state) => state.watchlist)
  console.log(list);

  return (
      <CardsContainer>
        <Card list={list} />
      </CardsContainer>
    )
}

export default Watchlist