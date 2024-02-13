import {CardsContainer, NavSelection} from '../components'
import { Card } from '../components/UI'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import envVariables from '../envVariables/envVariables'
import { useFetch } from '../hooks/useFetch'


function Home() { 
  const location = useLocation()
  const [type, setType] = useState("movie")
  const [category, setCategory] = useState("popular")

  const url = `https://api.themoviedb.org/3/${type}/${category}?api_key=${envVariables.apiKey}`
  const {data, loading, error} = useFetch(url)

  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search)
    setType(searchParams.get("type"))
    setCategory(searchParams.get("category"))
  }, [location.search])

  return (
    <>
      <div className='w-full h-full flex flex-col flex-wrap items-center justify-center mt-2'>

        <NavSelection />

        {loading && <h1>Loading.....</h1>}
        {error && <h1>Something Went wrong</h1>}

        {data && 
          <CardsContainer>
            {Object.keys(data.results).length !== 0 &&
            <Card list={data.results}/>
            }
          </CardsContainer>
        }
          
      </div>
    </>
  );
}
    
export default Home

