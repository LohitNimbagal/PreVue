import {CardsContainer, NavSelection} from '../components'
import { Card } from '../components/UI'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import envVariables from '../envVariables/envVariables'
import useFetch from '../Hooks/useFetch'


function Home() { 
  const location = useLocation()
  const [type, setType] = useState("movie")
  const [category, setCategory] = useState("popular")

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

    useEffect(()=>{
        (async () => {

        try {
          setIsLoading(true)
          const response = await fetch(`https://api.themoviedb.org/3/${type}/${category}?api_key=${envVariables.apiKey}&language=en-US`)
          const result = await response.json()
          setList(result.results)
          // setIsLoading(false)
        } catch (error) {
          setError(true)
        } finally {
          setIsLoading(false)
        }

        })()
    }, [type, category])


  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search)
    setType(searchParams.get("type"))
    setCategory(searchParams.get("category"))
  }, [location.search])

  return (
    <>
      <div className='w-full h-full flex flex-col flex-wrap items-center justify-center mt-2'>

        <NavSelection />

        {isLoading && <h1>Loading.....</h1>}
        {error && <h1>Something Went wrong</h1>}

        {list && 
          <CardsContainer>
            {Object.keys(list).length !== 0 &&
            <Card list={list}/>
            }
          </CardsContainer>
        }
          
        </div>
      </>
  );
}
    
export default Home

