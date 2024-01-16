import React from 'react'
import {Card} from '../components/index';
import { useSelector } from 'react-redux';

function Searchlist() {

  const response = useSelector(state => state.searchResult)
  const list = response.data.results

    return (
      <>
        <div className='container-snap h-70'>
        <div className='cardWrapper w-fit py-2 flex flex-wrap mb-1 justify-center gap-10'>
          {list !== undefined  ? ( <Card list={list} />) : <h1 className='text-2xl font-bold text-center'>Loading...</h1>
          }
        </div>
      </div>
      </>
      
    )
}

export default Searchlist