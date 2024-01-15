import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import info, { fetchInfo } from '../features/fetchInfoSlice'


function Card({list}) {



    const dispatch = useDispatch();
    const navigate = useNavigate();
    const placeholderImage = 'https://placehold.co/400x600?text=Not+Found '

    const handelCardClick = (item)=>{
        const type = item.media_type
        const id = item.id
        dispatch(fetchInfo({type, id}))
        navigate("/details")
    }
    
    console.log(list);
    return (
        <>
            {
                list.map((item) => (
                    <div key={item.id} id={item.id} className='tw-card w-40 h-fit flex flex-col rounded-xl text-center relative group overflow-hidden bg-white hover:cursor-pointer'>
                        <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : placeholderImage} alt="" className='rounded-xl' onClick={() => handelCardClick(item)} />
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