import React, { useEffect, useState } from 'react'
import { CardsContainer } from '../components';
import { Card } from '../components/UI'
import { useLocation, useSearchParams} from 'react-router-dom';
import envVariables from '../envVariables/envVariables';
import { useFetch } from '../hooks/useFetch';


function Result() {

  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams('')

  useEffect(()=>{
    if (location.state !== null) {
    setSearchParams({s: location.state})
    }
  }, [location.state])
  
  const searchURL = new URLSearchParams(location.search)
  const term = searchURL.get('s')

  const url = `https://api.themoviedb.org/3/search/multi?query=${term}&api_key=${envVariables.apiKey}`
  const {data, loading, error} = useFetch(url)

  
  return (
      <>
        {loading && <h1>Loading....</h1>}

        {error && <h1>Somehing Went Wrong</h1>}

        {data &&
        Object.keys(data.results).length > 0 ? (
          <CardsContainer>
            <Card list={data.results} />
          </CardsContainer>
        ) : <h1 className='h-screen flex items-center justify-center'>Search for movie or TV series Title above</h1>
        }
      </>
    )
}

export default Result