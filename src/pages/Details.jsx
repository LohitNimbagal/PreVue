import {MovieDetails, TvDetails} from "../components/index"
import { useLocation, useSearchParams } from "react-router-dom";
import { useState,useEffect } from "react";
import envVariables from "../envVariables/envVariables";

function Details() {
  
  const location = useLocation()
  const [data, setData] = useState({})
  const [type, setType] = useState(null);
  const [id, setId] = useState(null);

  
  useEffect(() => {
    const {typee, id} = location.state;
    setType(typee)
    setId(id)

    fetch (`https://api.themoviedb.org/3/${typee}/${id}?api_key=${envVariables.apiKey}`)
    .then(res => res.json())
    .then(result => setData(result))
    
  }, [location.state])


  if (data) {
      if (type === "movie") {
        return <MovieDetails details={data}/>
      }else if (type === "tv"){
        return <TvDetails details={data} />
      }else {
        return <MovieDetails details={data}/>
      }
  } else {
  return <div className="flex items-center justify-center"> <h1>Loading....</h1> </div>
  }

}

export default Details