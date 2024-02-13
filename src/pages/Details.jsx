import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import envVariables from "../envVariables/envVariables";
import {DetailsComp} from "../components";
import { useFetch } from "../hooks/useFetch";

function Details() {
  
  const location = useLocation()
  const [type, setType] = useState("")
  const [id, setId] = useState("")

  useEffect(()=>{
    const searchParams = new URLSearchParams(location.pathname) 
    let urltype = searchParams.get("type")
    let id = searchParams.get("id")
    setId(id)
    setType(urltype) 
    
  }, [location.pathname])

  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${envVariables.apiKey}`
  const {data, loading, error} = useFetch(url)

  return(
  <>
    {loading && <h1>Loading.....</h1>}
    {/* {error && <h1>Something Went Wrong</h1>} */}
    {data && <DetailsComp details={data}/>}
  </>
  )

}

export default Details