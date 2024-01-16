import React from 'react'

function TvDetails({details}) {

    const placeholder = 'https://placehold.co/400x600'

    return (
    <>
    <div className='w-full mt-5 p-16 leading-8 flex flex-col items-center lg:flex-row lg:items-start lg:gap-10 lg:px-60'>
        <img src={details.poster_path ? 'https://image.tmdb.org/t/p/w500/'+ details.poster_path : placeholder}alt="" className='detailsImg rounded-xl mb-5 w-60 lg:w-96'/>

        <div className='p-1 lg:leading-10'>
                <h2 className='text-3xl font-bold text-center lg:text-left lg:mb-5'>{details.name}</h2>

                <h3 className='p-1 bg-blue-400 w-fit h-fit text-xs font-bold rounded-sm'>TV Series</h3>

                <h4 className='font-bold'>{Math.round(details.vote_average)} ⭐</h4>

                {/* <h4 className='font-bold'>{details.release_date.split("-").reverse().join("-")}</h4> */}

                <h4><span className='font-bold'>Type : </span> {details.type}</h4>   

            <div className='flex gap-3'>
                <h4><span className='font-bold'>Seasons : </span>{details.number_of_seasons}</h4>
                <h4><span className='font-bold'>Episodes : </span>{details.number_of_episodes}</h4>
                {details.next_episode_to_air ? 
                    <h4><span className='font-bold'>Next Air Date : </span>
                    {details.next_episode_to_air.air_date.split("-").reverse().join("-")}
                    </h4> : null}
            </div>
            <h4><span className='font-bold'>Genre : </span>{details.genres.map(genre => genre.name).join(", ")}</h4>
            {/* <h4><span className='font-bold'>Creaters : </span>{details.created_by[0].name}</h4> */}
            <h4><span className='font-bold'>Actors : </span>{details.Actors}</h4>
            <h4><span className='font-bold '>Plot : </span><p className='leading-5 lg:leading-7'>{details.overview}</p></h4>
            <h4><span className='font-bold'>Language : </span>{details.spoken_languages.map(lan => lan.english_name).join(", ")}</h4>
            {/* <h4><span className='font-bold'>Awards : </span>{details.Awards}</h4> */}
        </div>
    </div>
    </>
    )
}

export default TvDetails