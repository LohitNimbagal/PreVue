import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { search } from '../../features/searchSlice';

function SearchInput() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
      
    return (
    <input 
    type="text" 
    className='w-64 h-10 mt-5 bg-white rounded-md p-1 text-center text-sm backdrop-blur-md bg-opacity-40 lg:m-1 lg:ml-12' 
    placeholder='Search for Movies and TV Shows' onKeyDown={(e)=>{
        if (e.key === "Enter") {
        navigate("/search", {state: {s: e.target.value}})
        }
      }}/>
  )
}

export default SearchInput