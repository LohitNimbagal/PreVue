import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function SearchInput() {

    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')
      
    return (
    <input 
    type="search" 
    className='w-64 h-10 mt-5 bg-white rounded-md p-1 text-center text-sm backdrop-blur-md bg-opacity-40 lg:m-1' 
    id={Math.random() * 10}
    placeholder='Search for Movies and TV Shows'
    onKeyDown={(e) => {
    if (e.key === 'Enter') {
        setSearchTerm(e.target.value)
        navigate(`/results`, {state: e.target.value})
    }}}
    />
  )
}

export default SearchInput