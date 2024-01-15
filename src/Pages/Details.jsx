import { useSelector } from "react-redux"
// import useFetchDetails from "../Hooks/useFetchDetails"
import MovieDetails from "../Components/Details/MovieDetails"
import TvDetails from "../Components/Details/TvDetails"
import { useEffect, useState } from "react"


function Details() {

  const info = useSelector(state => state.info)

  const detail = info.data

  useEffect(()=>{
    console.log(detail);
  }, [])



  if (detail !== null || detail !== undefined) {
    console.log(detail);
    if (detail.type === "movie") {
      return <MovieDetails details={detail}/>
    }else if (detail.type === "tv"){
      return <TvDetails details={detail} />
    }else {
      return <MovieDetails details={detail}/>
    }
  }else {
    return <h1>Loading.......</h1>
  }
}

export default Details