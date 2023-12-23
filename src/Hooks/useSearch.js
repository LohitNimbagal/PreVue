
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


function useSearch() {
  const [data, setData] = useState('')

  const searchTerm = useSelector((state)=> state.searchterm[state.searchterm.length - 1])

  const apiURL = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=84a52dd28c4dfe452e195008fb0304a2`

  useEffect(()=>{
    const fetchData = async () => {
        const response = await fetch(apiURL);
        const result = await response.json();
        setData(result.results);
      }
      
      fetchData()
  },[searchTerm])
  return data
}

export default useSearch