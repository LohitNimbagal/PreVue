import React, { useEffect, useState } from 'react'
// import useSearch from '../Hooks/useSearch'
import Card from '../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopular } from '../features/popularSlice';
// import usePopular from '../Hooks/usePopular';

function Home() { 

  const dispatch = useDispatch()
  const [list, setList] = useState([])

  dispatch(fetchPopular())
  const response = useSelector(state => state.popular) ;

  useEffect(()=>{
    setList(response.results)
  },[list])
  
  console.log(list);
  
  return(
    <>

    {/* <button className='border' onClick={()=>handelClick()}>Here</button> */}

    {/* {list !== '' && (
      <div className='cardWrapper h-fit py-2 flex flex-wrap mb-1 justify-center'>
        <Card list={list} />
      </div>
    )} */}
    </>
  )
}

export default Home