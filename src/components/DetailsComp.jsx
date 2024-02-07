import { useState, useEffect } from "react"
import WatchProvider from './UI/WatchProvider'
import WatchListButton from "./UI/WatchListButton"


function DetailsComp({details}) {

    // const placeholder = 'https://placehold.co/400x600'
    const [info, setInfo] = useState({id: 0, type: "movie"})

    useEffect(() => {
        if (details) {
            if (details.number_of_seasons) {
                setInfo({id: details.id, type: "tv"})
            } else {
                setInfo({id: details.id, type: "movie"})
            }
        }
    }, [details])

    return (
        <>
        <div className='w-full mt-5 p-16 leading-8 flex flex-col items-center lg:flex-row lg:items-start lg:gap-10 lg:px-56'>
    
            <img src={details.poster_path && 'https://image.tmdb.org/t/p/w500/'+ details.poster_path}alt="" className='detailsImg rounded-xl mb-5 w-60 lg:w-96'/>
    
            <div className='p-1 lg:leading-10'>
                <h2 className='text-3xl font-bold text-center lg:text-left lg:mb-5'>{details.title ? details.title : details.name}</h2>
    
                <h3 className='p-1 bg-blue-400 w-fit h-fit text-xs font-bold rounded-sm mb-1'>{info.type.toUpperCase()}</h3>   
    
                <div>
                    <span className='font-bold'>Available On : </span>
    
                    <WatchProvider info={details && info} />
                </div>
    
                <WatchListButton details={details} />

                <h4 className='font-bold'>Genre : <span className="font-normal">{details.genres?.map(genre => genre.name).join(", ")}</span></h4>
    
                {
                    info.type === "movie" ? (
                        
                        <>
                        <h4 className='font-bold'>Ratings : <span className="font-normal">{details.vote_average}</span> ⭐</h4>
    
                        <h4 className='font-bold'>Release Date : <span className="font-normal">{details.release_date?.split("-").reverse().join("-")}</span></h4>

                        <h4 className='font-bold'>Plot : <p className='leading-5 font-normal lg:leading-7'>{details.overview}</p></h4>
                        </>

                        ) : (
                        
                        <>
                            <div className='lg:flex gap-3'>
                                <h4 className='font-bold'>Seasons :<span className="font-normal">{details.number_of_seasons}</span> </h4>
                                
                                <h4 className="font-bold">Episodes : <span className="font-normal">{details.number_of_episodes}</span></h4>

                                {details.next_episode_to_air && 
                                <h4 className='font-bold' >Next Air Date :
                                    <span className="font-normal">
                                        {details.next_episode_to_air.air_date.split("-").reverse().join("-")}
                                    </span>
                                </h4>}
                            </div>

                            <h4 className='font-bold'>Genre : <span className="font-normal">{details.genres?.map(genre => genre.name).join(", ")}</span></h4>

                            <h4 className='font-bold'>Actors : <span className="font-normal">{details.Actors}</span></h4>

                            <h4 className='font-bold'>Plot :<p className='leading-5 font-normal lg:leading-7'>{details.overview}</p></h4>

                            <h4 className='font-bold'>Language :  <span className="font-normal">{details.spoken_languages?.map(lan => lan.english_name).join(", ")}</span></h4>
                        </>
                        )
                }
    
            </div>
    
        </div>
        </>
    )
}

export default DetailsComp