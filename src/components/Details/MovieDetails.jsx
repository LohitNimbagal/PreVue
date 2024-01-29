import React, { useEffect, useState } from 'react'
import WatchProvider from './WatchProvider'
import {addToWatchlist} from '../../store/watchlistSlice'
import { useDispatch, useSelector } from 'react-redux'
import service from "../../appwrite/config"
import { useLocation } from 'react-router-dom'


function MovieDetails({details}) {

    const dispatch = useDispatch()
    const placeholder = 'https://placehold.co/400x600'
    const [isSaved, setIsSaved] = useState(false)

    const info = {id: details.id, type: "movie"}

    const list = useSelector(state => state.watchlist)

    useEffect(() => {
        const isAlreadyAdded = list.some(item => item.id === details.id);

        if (isAlreadyAdded) {
            setIsSaved(true)
        }

    }, [details])

    return (
    <>
    <div className='w-full mt-5 p-16 leading-8 flex flex-col items-center lg:flex-row lg:items-start lg:gap-10 lg:px-56'>

        <img src={details.poster_path ? 'https://image.tmdb.org/t/p/w500/'+ details.poster_path : placeholder}alt="" className='detailsImg rounded-xl mb-5 w-60 lg:w-96'/>

        <div className='p-1 lg:leading-10'>
            <h2 className='text-3xl font-bold text-center lg:text-left lg:mb-5'>{details.title}</h2>

            <h3 className='p-1 bg-blue-400 w-fit h-fit text-xs font-bold rounded-sm mb-1'>Movie</h3>
                

            <div className=''>
                <span className='font-bold'>Providers : </span>

                <WatchProvider info={details && info} />
            </div>

            <button className='rounded bg-blue-400 my-1 py-1 px-2 font-bold' 
            onClick={() => {
                setIsSaved(!isSaved)
                    dispatch(addToWatchlist({poster_path: details.poster_path, id: details.id, title: details.title, media_type: "movie"}))
            }}>
               {isSaved ? "- Remove from Watchlist" : "+ Add to Watchlist" }
            </button>

            <h4><span className='font-bold'>Ratings : </span>{Math.round(details.vote_average)} ⭐</h4>

            <h4><span className='font-bold'>Release Date : </span>{details.release_date?.split("-").reverse().join("-")}</h4>

            <h4><span className='font-bold'>Genre : </span>{details.genres?.map(genre => genre.name).join(", ")}</h4>


            <h4><span className='font-bold '>Plot : </span><p className='leading-5 lg:leading-7'>{details.overview}</p></h4>

        </div>

    </div>
    </>
    )
}

export default MovieDetails