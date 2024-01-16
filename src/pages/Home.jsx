import { useSelector } from 'react-redux'
import {NavSelection, Card} from '../components/index'
import useFetch from '../hooks/useFetch'

function Home() { 

  const {type, category} = useSelector(state => state.selection)
  const list = useFetch({type, category}) || {};


  return (
    <>
      <div className='h-full flex flex-col flex-wrap items-center justify-center px-20 pb-10 '>
        <NavSelection />

        <div className='flex h-full gap-7 flex-wrap items-center justify-center overflow-hidden'>
          {Object.keys(list).length !== 0 && <Card list={list} />}
        </div>
      </div>
    </>
  );
}
    
export default Home