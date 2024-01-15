import { useSelector } from 'react-redux'
import {NavSelection, Card} from '../components/index'
import useFetch from '../hooks/useFetch'

function Home() { 

  const {type, category} = useSelector(state => state.selection)
  const list = useFetch({type, category}) || {};


  return (
    <>
      <div className='flex flex-col flex-wrap items-center justify-center'>
        <NavSelection />

        <div className='flex h-screen gap-5 flex-wrap items-center justify-center'>
        {Object.keys(list).length !== 0 && <Card list={list} />}
        </div>
      </div>
    </>
  );
}
    
export default Home