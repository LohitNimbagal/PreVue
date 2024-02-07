import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function NavSelection() {

  const [type, setType] = useState("movie")
  const [category, setCategory] = useState("popular")
  const [categorySelect, setCategorySelect] = useState()
  const [searchParams, setSearchParams] = useSearchParams()

  const typeSelect = [
    { name: "Movie", query: "movie" },
    { name: "Tv Series", query: "tv" },
  ];
  
  const movieCat = [
    { name: "Popular", query: "popular" },
    { name: "Top Rated", query: "top_rated" },
    { name: "Now Playing", query: "now_playing" },
    { name: "Upcoming", query: "upcoming" },
  ];
  
  const tvCat = [
    { name: "Popular", query: "popular" },
    { name: "Top Rated", query: "top_rated" },
    { name: "Airing Today", query: "airing_today" },
    { name: "On The Air", query: "on_the_air" },
  ];
  
  useEffect(() => {
    if (type === 'movie') {
      setCategorySelect(movieCat);
    } else {
      setCategorySelect(tvCat);
    }
  }, [type]);

  useEffect(()=>{
    setSearchParams({type, category})
  },[type, category])


  return (
    <>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='h-fit w-fit p-1 m-5 bg-white rounded-md backdrop-blur-md bg-opacity-40'> 
          <ul className=' flex items-center justify-around gap-5 '>

            {typeSelect.map((item) => {
                return (
                <li key={item.name}>
                    <button 
                    onClick={() => {
                      setType(item.query)
                      setCategory("popular")
                    }
                    } 
                    className={`${type === item.query ? 'bg-blue-400' : 'white'} duration:400  rounded-sm px-2`}
                    >
                      {item.name}
                    </button>
                </li>
                )
            })}
          </ul>
        </div>

        <div className='h-fit w-[calc(100%-1rem)] p-1 mb-5 mx-10 text-justify bg-white rounded-md backdrop-blur-md bg-opacity-40 md:w-fit lg:w-fit'>
          <ul className=' flex items-center justify-around gap-5'>
          {categorySelect && (categorySelect.map((item) => {
              return (
              <li key={item.name}>
                  <button 
                  onClick={()=> setCategory(item.query)}
                  className={`${category === item.query ? 'bg-blue-400' : 'white'} rounded-sm px-2`}
                  >
                    {item.name}
                  </button>
              </li>
              )
          })) }
          </ul>
        </div>
      </div>
    </>

    
  )
}

export default NavSelection