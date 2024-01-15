import { useSelector } from "react-redux"
import {MovieDetails, TvDetails} from "../components/index"
import useFetchInfo from '../hooks/useFetchInfo'

function Details() {

  const {type, id} = useSelector(state => state.details)
  const data = useFetchInfo({type, id});

  if (data) {
      console.log(data);
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