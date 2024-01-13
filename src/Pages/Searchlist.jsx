import React from 'react'
// import useSearch from '../Hooks/useSearch'
import Card from '../components/Card';

function Searchlist(searchTerm) {

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

export default Searchlist