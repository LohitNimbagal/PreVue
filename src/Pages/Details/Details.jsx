import { useSelector } from "react-redux"
import Info from "../../Components/Info/Info"
import useFetchDetails from "../../Hooks/useFetchDetails"


function Details() {
  const detailsID = useSelector((state)=> state.detailsIdList[state.detailsIdList.length - 1])
  const details = useFetchDetails(detailsID)

  // console.log(details)
  if (details !== undefined) {
    return (
      <Info details={details}/>
    )
  }
}

export default Details