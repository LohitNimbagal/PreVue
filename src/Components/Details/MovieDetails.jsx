import React from 'react'

function MovieDetails({details}) {

    const placeholder = 'https://placehold.co/400x600'


    return (
    <>
    <div className='w-full h-full px-10 py-5 flex gap-5'>
        <img src={details.poster_path ? 'https://image.tmdb.org/t/p/w500/'+ details.poster_path : placeholder}alt="" className='detailsImg rounded-xl'/>

        <div className='my-5 ml-10 text-sm font-thin w-4/5 p-5 leading-7'>
                <h2 className='text-xl mb-4 font-bold'>{details.title}</h2>
            <div className='flex gap-3'>
                <h4 className='font-bold'>{details.imdbRating} ⭐</h4>
                <h4 className='font-bold'>{details.release_date.split("-").reverse().join("-")}</h4>
            </div>
            {/* <h4><span className='font-bold'>Rated : </span>{details.Rated}</h4> */}
            {/* <h4><span className='font-bold'>Realeased : </span>{details.Released}</h4> */}
            <h4><span className='font-bold'>Genre : </span>{details.genres.map(genre => genre.name).join(", ")}</h4>
            <h4><span className='font-bold'>Director : </span>{details.Director}</h4>
            <h4><span className='font-bold'>Writer : </span>{details.Writer}</h4>
            <h4><span className='font-bold'>Actors : </span>{details.Actors}</h4>
            <h4><span className='font-bold '>Plot : </span><p className='leading-5'>{details.overview}</p></h4>
            <h4><span className='font-bold'>Language : </span>{details.spoken_languages.map(lan => lan.english_name).join(", ")}</h4>
            {/* <h4><span className='font-bold'>Awards : </span>{details.Awards}</h4> */}
        </div>
    </div>
    </>
    )
}

export default MovieDetails