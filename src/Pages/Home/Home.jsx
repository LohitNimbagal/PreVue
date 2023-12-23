import React from 'react'
import useSearch from '../../Hooks/useSearch'
import Card from '../../Components/Card/Card';

function Home() {   

    const list = useSearch();
    // console.log(list);
    
    return (
      <>
      {list !== '' && (
        <div className='cardWrapper h-screen px-40 py-2 flex flex-wrap mb-20 justify-center'>
          <Card list={list} />
        </div>
      )}
      </>
      
    )
  }

export default Home