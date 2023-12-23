import React from 'react'
import { useDispatch } from 'react-redux'
import {remove } from '../../Store/watchlistSlice'

function WatchlistCard({list}) {
    const dispatch = useDispatch();

    const handelRemove = (item)=>{
        dispatch(remove(item));
    }

    return (
        list.map((item) => (
            <div key={Math.random()} id={item.id} className=' tw-card w-40 h-fit flex  flex-col rounded-xl m-2  text-center relative group overflow-hidden bg-white '>
                <img src={item.poster_path ? 'https://image.tmdb.org/t/p/w500/'+ item.poster_path : placeholder}alt="" className=' rounded-xl '/>

                <div className='absolute h-1/4 text-white w-full flex items-center justify-center bg-black/50 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>

                <h2 className='text-xs flex justify-center items-center font-bold'>{item.title}</h2>
        
                </div>
        
                <button onClick={()=>handelRemove(item.id)} className='absolute top-1 right-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-yellow-400 text-yellow-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5" />
                    </svg>
                </button>
            </div>
        )
    )
    )
}
   

export default WatchlistCard