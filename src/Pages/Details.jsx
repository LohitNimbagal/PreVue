import { useSelector } from "react-redux"
import useFetchDetails from "../Hooks/useFetchDetails"
import MovieDetails from "../Components/Details/MovieDetails"
import TvDetails from "../Components/Details/TvDetails"


function Details() {

  const detailsID = useSelector((state)=> state.detailsIdList[state.detailsIdList.length - 1])

  const details = useFetchDetails(detailsID)

  if (details !== undefined) {
    if (detailsID.type === "movie") {
      return <MovieDetails details={details}/>
    }else{
      return <TvDetails details={details} />
    }
  }
}

export default Details