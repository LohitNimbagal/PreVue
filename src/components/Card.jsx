import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setDetails } from '../features/setDetailsSlice';



function Card({list}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const placeholderImage = 'https://placehold.co/400x600?text=Not+Found '

    const {type} = useSelector(state => state.selection)

    const handleCardClick = (item)=>{

        const typee = item.media_type ? item.media_type : type
        const id = item.id
        dispatch(setDetails({typee, id}))
        navigate("/details")
    }

    return (
        <>
            {
                list.map((item) => (
                    <div key={item.id} id={item.id} className='tw-card w-40 h-fit flex flex-col rounded-xl text-center relative group overflow-hidden bg-white hover:cursor-pointer'>
                        <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : placeholderImage} alt="" className='rounded-xl' onClick={() => handleCardClick(item)} />
                        <div className='absolute h-1/4 text-white w-full flex items-center justify-center bg-black/50 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                            <h2 className='text-xs flex justify-center items-center font-bold'>{item.title ? item.title : item.name}</h2>
                        </div>
                        {/* Additional code related to watchlist */}
                    </div>
                ))
            }
        </>
    );
}

   

export default Card