import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addId } from '../../Store/detailsSlice';
import { add } from '../../Store/watchlistSlice'

function MovieDetails({details}) {

    const placeholder = 'https://placehold.co/400x600'

    return (
    <>
    <div className='detailWrapper  w-full  px-20 py-5 flex flex-row gap-5'>
        <div className='dR p-5 flex '>
            <img src={details.poster_path ? 'https://image.tmdb.org/t/p/w500/'+ details.poster_path : placeholder}alt="" className='detailsImg rounded-xl'/>
        </div>

        <div className='dL my-5 ml-10 text-sm font-thin w-3/5 p-5 leading-7'>
        <div >
                <h2 className='text-3xl mb-3 font-bold'>{details.title}</h2>
                <h3 className='p-1 bg-blue-400 w-fit h-fit text-xs font-bold rounded-sm mb-1'>Movie</h3>
                <h4><span className='font-bold'>Ratings : </span>{Math.round(details.vote_average)} ⭐</h4>

                <h4><span className='font-bold'>Release Date : </span>{details.release_date.split("-").reverse().join("-")}</h4>

            {/* <h4><span className='font-bold'>Rated : </span>{details.Rated}</h4> */}
            {/* <h4><span className='font-bold'>Realeased : </span>{details.Released}</h4> */}
            {/* <h4><span className='font-bold'>Genre : </span>{details.genres.map(genre => genre.name).join(", ")}</h4> */}
            {/* <h4><span className='font-bold'>Director : </span>{details.Director}</h4> */}
            {/* <h4><span className='font-bold'>Writer : </span>{details.Writer}</h4> */}
            {/* <h4><span className='font-bold'>Actors : </span>{details.Actors}</h4> */}
            {/* <h4><span className='font-bold'>Awards : </span>{details.Awards}</h4> */}

            <h4><span className='font-bold '>Plot : </span><p className='leading-5'>{details.overview}</p></h4>
            <h4><span className='font-bold'>Language : </span>{details.spoken_languages.map(lan => lan.english_name).join(", ")}</h4>
            
        </div>
        </div>
    </div>
    </>
    )
}

export default MovieDetails