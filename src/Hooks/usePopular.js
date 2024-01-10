import React from 'react'
import { useState, useEffect } from 'react'

function usePopular() {
    const [data, setData] = useState('')
  
    const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=84a52dd28c4dfe452e195008fb0304a2&language=en-US`
  
    useEffect(()=>{
      const fetchData = async () => {
          const response = await fetch(apiURL);
          const result = await response.json();
          setData(result.results);
          console.log(data);
        }
        
        fetchData()
    },[])

    return data
}

export default usePopular