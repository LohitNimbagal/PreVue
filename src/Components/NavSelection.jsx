import React, { useState, useEffect } from 'react'

function NavSelection() {

  const [title, setTitle] = useState("movie")
  const [category, setCategory] = useState("")
  const [categorySelect, setCategorySelect] = useState()

  const titleSelect = [
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
    setCategory("popular")

    if (title === 'movie') {
      setCategorySelect(movieCat);
    } else {
      setCategorySelect(tvCat);
    }
  }, [title]);


  return (
    <>
        <div className='h-fit py-1 px-2 m-5 mx-10 rounded-sm bg-white'>
          <ul className=' flex items-center justify-around gap-5 '>

            {titleSelect.map((item) => {
                return (
                <li key={item.name}>
                    <button 
                    onClick={()=> setTitle(item.query)} 
                    className={`${title === item.query ? 'bg-blue-400' : 'white'} duration:400  rounded-sm px-2`}
                    >
                      {item.name}
                    </button>
                </li>
                )
            })}
          </ul>
        </div>

        <div className='h-fit py-1 px-2 mb-5 mx-10 rounded-sm bg-white'>
          <ul className=' flex items-center justify-around gap-5 '>
          {categorySelect && (categorySelect.map((item) => {
              return (
              <li key={item.name}>
                  <button 
                  onClick={()=> setCategory(item.query)}
                  className={`${category === item.query ? 'bg-blue-400' : 'white'} duration:400  rounded-sm px-2`}
                  >
                    {item.name}
                  </button>
              </li>
              )
          })) }
          </ul>
        </div>
    </>

    
  )
}

export default NavSelection