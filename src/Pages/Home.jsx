import Card from '../components/Card';
import { useSelector } from 'react-redux';
import NavSelection from '../components/NavSelection';

function Home() { 

const response = useSelector(state => state.popular)
const list = response.data.results

  return(
    <>
      <NavSelection />

      <div className='container-snap h-70'>
        <div className='cardWrapper w-fit py-2 flex flex-wrap mb-1 justify-center gap-10'>
          {list !== undefined  ? ( <Card list={list} />) : <h1 className='text-2xl font-bold text-center'>Loading...</h1>
          }
        </div>
      </div>
    </>
  )
}

export default Home