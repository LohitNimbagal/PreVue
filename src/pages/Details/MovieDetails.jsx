import React, { useState } from 'react'

function MovieDetails({details}) {

    const placeholder = 'https://placehold.co/400x600'

    return (
    <>
    <div className='w-full mt-5 p-16 leading-8 flex flex-col items-center lg:flex-row lg:items-start lg:gap-10 lg:px-60'>

        <img src={details.poster_path ? 'https://image.tmdb.org/t/p/w500/'+ details.poster_path : placeholder}alt="" className='detailsImg rounded-xl mb-5 w-60 lg:w-96'/>

        <div className='p-1 lg:leading-10'>
            <h2 className='text-3xl font-bold text-center lg:text-left lg:mb-5'>{details.title}</h2>

            <h3 className='p-1 bg-blue-400 w-fit h-fit text-xs font-bold rounded-sm mb-1'>Movie</h3>

            <h4><span className='font-bold'>Ratings : </span>{Math.round(details.vote_average)} ⭐</h4>

            <h4><span className='font-bold'>Release Date : </span>{details.release_date?.split("-").reverse().join("-")}</h4>

            {/* <h4><span className='font-bold'>Rated : </span>{details.Rated}</h4> */}

            {/* <h4><span className='font-bold'>Realeased : </span>{details.Released}</h4> */}

            <h4><span className='font-bold'>Genre : </span>{details.genres?.map(genre => genre.name).join(", ")}</h4>

            {/* <h4><span className='font-bold'>Director : </span>{details.Director}</h4> */}
            {/* <h4><span className='font-bold'>Writer : </span>{details.Writer}</h4> */}
            {/* <h4><span className='font-bold'>Actors : </span>{details.Actors}</h4> */}
            {/* <h4><span className='font-bold'>Awards : </span>{details.Awards}</h4> */}

            <h4><span className='font-bold '>Plot : </span><p className='leading-5 lg:leading-7'>{details.overview}</p></h4>
            {/* <h4><span className='font-bold'>Language : </span>{details.spoken_languages.map(lan => lan.english_name).join(", ")}</h4> */}
        </div>

    </div>
    </>
    )
}

export default MovieDetails