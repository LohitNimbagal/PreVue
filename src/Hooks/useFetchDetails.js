import { useEffect, useState } from 'react'
import Details from '../Pages/Details/Details';

function useFetchDetails(id) {

    if (id !== 'undefined') {
        const [details, setDetails] = useState()
        const apiURL = `https://api.themoviedb.org/3/movie/${id}?api_key=84a52dd28c4dfe452e195008fb0304a2`
        
        useEffect(()=>{
            const fetchData = async () => {
                const response = await fetch(apiURL);
                const result = await response.json();
                console.log(result);
                setDetails(result)
            }
            fetchData()
        },[id])

    return details
    }
}

export default useFetchDetails