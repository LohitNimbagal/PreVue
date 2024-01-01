import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../Store/watchlistSlice'
import { Link } from 'react-router-dom'
import useFetchDetails from '../../Hooks/useFetchDetails'
import { addId } from '../../Store/detailsSlice'


function Card({list}) {

    
    
    const placeholder = 'https://placehold.co/400x600'
    
    const dispatch = useDispatch();
    
    const handelAdd = (item)=>{
        dispatch(add(item));
    }

    const handelCardClick = (id)=>{
        console.log(id);
        dispatch(addId(id))
    }

    return (
        list.map((item) => (
            <Link to='/details'>
            <div key={item.id} id={item.id} className=' tw-card w-40 h-fit flex  flex-col rounded-xl m-2  text-center relative group overflow-hidden bg-white ' onClick={()=>handelCardClick(item.id)}>
                <img src={item.poster_path ? 'https://image.tmdb.org/t/p/w500/'+ item.poster_path : placeholder}alt="" className=' rounded-xl '/>

                <div className='absolute h-1/4 text-white w-full flex items-center justify-center bg-black/50 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>

                <h2 className='text-xs flex justify-center items-center font-bold'>{item.title}</h2>
        
                </div>
                <button onClick={()=>handelAdd(item)}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-1 right-1 hover:fill-yellow-400 text-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg >
                </button>
            </div>
            </Link>
        )
    )
    )
}
   

export default Card