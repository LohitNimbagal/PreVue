import {CardsContainer, NavSelection} from '../components'
import { Card } from '../components/UI'
import useFetch from '../Hooks/useFetch'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Home() { 

  const location = useLocation()
  const [params, setParams] = useState({ type: null, category: null });

  
  useEffect(()=>{
    let searchParams = new URLSearchParams(document.location.search)
    let typeParams = searchParams.get("type")
    let categoryParams = searchParams.get("category")

    if (typeParams && categoryParams) {
      setParams({ type: typeParams, category: categoryParams });
    }

  },[location.search])
  

    const list = useFetch(params)

    if (list) {
      return (
        <>
          <div className='w-full h-full flex flex-col flex-wrap items-center justify-center mt-2'>
            <NavSelection />
            <CardsContainer>
              {Object.keys(list).length !== 0 && <Card list={list}/>}
            </CardsContainer>
          </div>
        </>
      );
    }

  
}
    
export default Home