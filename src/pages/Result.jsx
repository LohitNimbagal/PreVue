import React, { useEffect, useState } from 'react'
import { CardsContainer } from '../components';
import { Card } from '../components/UI'
import { useLocation, useSearchParams} from 'react-router-dom';
import envVariables from '../envVariables/envVariables';


function Result() {

  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [list, setList] = useState({})


  useEffect(()=>{
    if (location.state !== null) {
    setSearchParams({s: location.state})
    }
  }, [location.state])

  useEffect(()=>{
    const searchURL = new URLSearchParams(location.search)
    const term = searchURL.get('s')

    if (term) {
      (async() => {

        try {
          setIsLoading(true)

          const response = await fetch (`https://api.themoviedb.org/3/search/multi?query=${term}&api_key=${envVariables.apiKey}&language=en-US`)
          const result = await response.json()

          setList(result.results)
        } catch (error) {
          setError(true)
        } finally {
          setIsLoading(false)
        }
  
      }) ()
    }
  }, [location.search])

  
  return (
      <>
      {isLoading && <h1>Loading....</h1>}

      {error && <h1>Somehing Went Wrong</h1>}

      {Object.keys(list).length > 0 ? (
        <CardsContainer>
          <Card list={list} />
        </CardsContainer>
      ): <h1 className='h-screen flex items-center justify-center'>Search for movie or TV series Title above</h1>}

      </>
    )
}

export default Result