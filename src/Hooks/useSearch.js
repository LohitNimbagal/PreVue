import React from 'react'
import { useState, useEffect } from 'react'

function useSearch() {
  const [data, setData] = useState('')

  const apiKEY = '7a7dc1b'
  const apiURL = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKEY}&s=batman`

  useEffect(()=>{
    const fetchData = async () => {
        const response = await fetch(apiURL);
        const result = await response.json();
        setData(result.Search);
    }

    fetchData()
  },[])
  return data
}

export default useSearch