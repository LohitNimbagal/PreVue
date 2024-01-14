import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCat } from '../features/fetchCatSlice';
import { useState, useEffect } from 'react';

function NavSelection() {
      
const dispatch = useDispatch()
const response = useSelector(state => state.category)
const list = response.data.results

const [category, setCategory] = useState("popular")
const [type, setType] = useState("movie")
const [catSelect, setCatSelect] = useState([])

const movieCat = [
    {
      name: "Popular",
      query: "popular",
      active: true,
    },
    {
      name: "Top Rated",
      query: "top_rated",
      active: false,
    },
    {
      name: "Now Playing",
      query: "now_playing",
      active: false,
    },
    {
      name: "Upcoming",
      query: "upcoming",
      active: false,
    },
  ]
const tvCat = [
    {
      name: "Popular",
      query: "popular",
      active: true,
    },
    {
      name: "Top Rated",
      query: "top_rated",
      active: false,
    },
    {
      name: "Airing Today",
      query: "airing_today",
      active: false,
    },
    {
      name: "On The Air",
      query: "on_the_air",
      active: false,
    },
  ]
  
const typeSelect = [{
    name: "Movie",
    query: "movie",
    active: true,
  },
  {
    name: "Tv Series",
    query: "tv",
    active: false,
  },
  ]

useEffect(() => {

  dispatch(fetchCat({type, category}));

  if (type === "movie") {
    setCatSelect(movieCat)  
  } else {
    setCatSelect(tvCat)
  }

}, [category, type]);

  return (
    <>

    <div className='flex flex-col flex-wrap items-center justify-center'>

        <div className='h-fit py-1 px-2 m-5 mx-10 rounded-sm bg-white'>
          <ul className=' flex items-center justify-around gap-5 '>

          {typeSelect.map((item) => {
              return (
              <li key={item.name}>
                  <button 
                  className={`${type === item.query ? 'bg-blue-400' : 'white'} duration:400  rounded-sm px-2`}
                  onClick={() => {
                    setType(item.query);
                    setCategory("popular")
                  }}
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

          {catSelect.map((item) => {
              return (
              <li key={item.name} >
                  <button 
                  className={`${category === item.query ? 'bg-blue-400' : 'white'} rounded-sm px-2`}
                  onClick={() => setCategory(item.query)}>
                    {item.name}
                  </button>
              </li>
              )
          })}

          </ul>
        </div>
    </div>

    </>
  )
}

export default NavSelection