import { useSelector } from 'react-redux'
import NavSelection from '../components/NavSelection'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'
import { useEffect } from 'react'
import { list } from 'postcss'

function Home() { 

  const {type, category} = useSelector(state => state.selection)
  const list = useFetch({type, category}) || {};

  return (
    <>
      <div className='flex flex-col flex-wrap items-center justify-center'>
        <NavSelection />

        <div className='flex w-screen h-screen gap-5 flex-wrap items-center justify-center'>
        {Object.keys(list).length !== 0 && <Card list={list} />}
        </div>
      </div>
    </>
  );
}
    
export default Home