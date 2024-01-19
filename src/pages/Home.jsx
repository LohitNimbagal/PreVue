import { useSelector } from 'react-redux'
import {NavSelection, Card, CardsContainer} from '../components/index'
import useFetch from '../hooks/useFetch'

function Home() { 

  const {type, category} = useSelector(state => state.selection)
  const list = useFetch({type, category}) || {};


  return (
    <>
      <div className='w-full h-full flex flex-col flex-wrap items-center justify-center mt-2'>
        <NavSelection />

        <CardsContainer>
          {Object.keys(list).length !== 0 && <Card list={list} />}
        </CardsContainer>

      </div>
    </>
  );
}
    
export default Home