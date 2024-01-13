import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Card({list}, watchlist=true) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const placeholderImage = 'https://placehold.co/400x600?text=Not+Found '

    const handelCardClick = (item)=>{
        dispatch(addId({id: item.id, type: item.media_type}))
        navigate("/details")
    }

    const handelAdd = (item) => {
        dispatch(add(item))
    }

    // console.log(list);
    return (
        list.map((item) => 
        {
        return (
                <div key={item.id} id={item.id} className=' tw-card w-40 h-fit flex  flex-col rounded-xl m-2  text-center relative group overflow-hidden bg-white hover:cursor-pointer'>
                

                <img src={item.poster_path ? 'https://image.tmdb.org/t/p/w500/'+ item.poster_path : placeholderImage}alt="" className=' rounded-xl 'onClick={()=>handelCardClick(item)}/>

                <div className='absolute h-1/4 text-white w-full flex items-center justify-center bg-black/50 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>

                <h2 className='text-xs flex justify-center items-center font-bold'>{item.title ? item.title : item.name}</h2>

                </div>

                {/* {watchlist ? (
                   <button onClick={()=>handelAdd(item)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-1 right-1 hover:fill-yellow-400 text-yellow-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg >
                    </button>
                ) : (
                    <button onClick={()=>handelAdd(item)}>
                    X
                    </button>
                )}
                 */}
                </div>
        )
            
        }        
        )

    )
}
   

export default Card