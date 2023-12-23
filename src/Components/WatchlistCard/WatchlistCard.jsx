import React from 'react'
import { useDispatch } from 'react-redux'
import {remove } from '../../Store/watchlistSlice'

function WatchlistCard({list}) {
    // console.log(list);
    const dispatch = useDispatch();

    const handelRemove = (item)=>{
        dispatch(remove(item));
    }

    return (
        list.map((item) => (
            <div key={Math.random()} id={item.imdbId} className=' tw-card w-40 h-fit flex  flex-col rounded-xl m-2  text-center relative group overflow-hidden bg-white '>
                <img src={item.Poster} alt="" className=' rounded-xl '/>

                <div className='absolute h-1/4 text-white w-full flex items-center justify-center bg-black/50 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>

                <h2 className='text-xs flex justify-center items-center font-bold'>{item.Title}</h2>
        
                </div>
        
                <button onClick={()=>handelRemove(item.imdbID)} className='absolute top-1 right-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        )
    )
    )
}
   

export default WatchlistCard