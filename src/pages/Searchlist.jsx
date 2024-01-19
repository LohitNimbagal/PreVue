import React, { useEffect, useState } from 'react'
import {Card, CardsContainer} from '../components/index';
import { useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import envVariables from '../envVariables/envVariables';


function Searchlist() {

  const location = useLocation()
  const [data, setData] = useState({})

  useEffect(()=>{
  const term = (location.state.s);  
    fetch (`https://api.themoviedb.org/3/search/multi?query=${term}&api_key=${envVariables.apiKey}&language=en-US`)
    .then(res => res.json())
    .then(res => setData(res))
  }, [location.state])

  if (data.total_results > 0) {
    const list = data.results
    return (
      <>
        <CardsContainer>
          {list !== undefined  ? ( <Card list={list} />) : <h1 className='text-2xl font-bold text-center'>Loading...</h1>
          }
        </CardsContainer>
      </>
    )
  } else return <h1 className='flex items-center justify-center'>No Results Found</h1>  
}

export default Searchlist