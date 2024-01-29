import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import envVariables from "../envVariables/envVariables";
import {DetailsComp} from "../components";

function Details() {
  
  const location = useLocation()
  const [data, setData] = useState({})
  const [type, setType] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  

  useEffect(()=>{

    (async () => {

      const searchParams = new URLSearchParams(location.pathname) 
      let urltype = searchParams.get("type")
      let id = searchParams.get("id")
      setType(urltype)

    try {
      setIsLoading(true)
      const response = await fetch (`https://api.themoviedb.org/3/${urltype}/${id}?api_key=${envVariables.apiKey}`)
      const result = await response.json()
      setData(result)
    } catch (error) {
      setError(true)
      console.log(error);
    } finally {
      setIsLoading(false)
    }
    })()
  }, [location.pathname])

  return(
  <>
    {isLoading && <h1>Loading.....</h1>}
    {error && <h1>Something Went Wrong</h1>}

    <DetailsComp details={data}/>

  </>
  )

}

export default Details