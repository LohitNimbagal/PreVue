import { useEffect, useState } from 'react'
import Details from '../Pages/Details';

function useFetchDetails({id, type}) {

    // console.log({id, type});

    if (id !== 'undefined') {
        const [details, setDetails] = useState()
        const apiURL = `https://api.themoviedb.org/3/${type}/${id}?api_key=84a52dd28c4dfe452e195008fb0304a2`
        // console.log(apiURL);

        useEffect(()=>{
            const fetchData = async () => {
                const response = await fetch(apiURL);
                const result = await response.json();
                console.log(result);
                setDetails(result)
            }
            fetchData()
        },[id,type])

    return details
    }
}

export default useFetchDetails