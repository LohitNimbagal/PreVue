import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../Store/watchlistSlice'

function Card({list}) {

    const placeholder = 'https://placehold.co/400x600'

    const dispatch = useDispatch();

    const handelAdd = (item)=>{
        dispatch(add(item));
    }

    

    return (
        list.map((item) => (
            <div key={Math.random()} id={item.id} className=' tw-card w-40 h-fit flex  flex-col rounded-xl m-2  text-center relative group overflow-hidden bg-white '>
                <img src={item.poster_path ? 'https://image.tmdb.org/t/p/w500/'+ item.poster_path : placeholder}alt="" className=' rounded-xl '/>

                <div className='absolute h-1/4 text-white w-full flex items-center justify-center bg-black/50 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>

                <h2 className='text-xs flex justify-center items-center font-bold'>{item.title}</h2>
        
                </div>
                <button onClick={()=>handelAdd(item)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-1 right-1 hover:fill-yellow-400 text-yellow-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </button>

        
                
            </div>
        )
    )
    )
}
   

export default Card