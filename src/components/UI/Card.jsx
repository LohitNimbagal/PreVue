import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
// import { addToWatchlist } from '../../store/watchlistSlice';

function Card({list}) {

    const location = useLocation()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [type, setType] = useState("movie")

    useEffect(()=>{
        let searchParams = new URLSearchParams(document.location.search)
        let typePara = searchParams.get("type")
        setType(typePara)
    },[location.search])

    const handleCardClick = (item)=>{
        const newType = item.media_type || type ;
        setType(newType);

        let id = item.id
        navigate(`/details/title=${item.title ? item.title : item.name}&type=${newType}&id=${id}`)
    }

    return (
        <>
        {
        list.map((item) => (
            item.poster_path ? (
                <div key={item.id} id={item.id} className='w-40 m-1 h-fit flex flex-col rounded-xl text-center relative group overflow-hidden bg-white hover:cursor-pointer lg:w-48'>

                    <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : placeholderImage} alt="" className='rounded-xl' onClick={() => handleCardClick(item)} />
                    
                    {/* <img src={notsaved} alt="" className='absolute w-8 right-1 top-1 z-10'
                    onClick={() => {
                        dispatch(addToWatchlist({poster_path: item.poster_path, id: item.id, title: item.title || item.name, media_type: item.media_type || type}))
                    }}
                    /> */}

                    <div className='absolute h-1/4 text-white w-full flex items-center justify-center bg-black/50 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>


                        <h2 className='text-xs flex justify-center items-center font-bold'>{item.title ? item.title : item.name}</h2>

                    </div>

                </div>
                ) : null
            ))
        }
        </>
    );
}

   

export default Card