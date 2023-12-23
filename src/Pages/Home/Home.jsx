import React from 'react'
import useSearch from '../../Hooks/useSearch'
import Card from '../../Components/Card/Card';
import usePopular from '../../Hooks/usePopular';

function Home(searchTerm) { 
  
  let list = useSearch(searchTerm)

    return (
      <>
      {list !== '' && (
        <div className='cardWrapper h-fit px-40 py-2 flex flex-wrap mb-1 justify-center'>
          <Card list={list} />
        </div>
      )}
      </>
      
    )
  }

export default Home