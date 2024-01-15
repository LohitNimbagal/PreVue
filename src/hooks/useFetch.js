import React, { useEffect, useState } from 'react'
import envVariables from '../envVariables/envVariables'

const useFetch = ({type, category}) => {

    const [data, setData] = useState({})
    const [loader, setloader] = useState(true)

    useEffect(()=>{

        console.log({type, category});
        fetch (`https://api.themoviedb.org/3/${type}/${category}?api_key=${envVariables.apiKey}&language=en-US`)

        .then(res => res.json())
        .then(res => setData(res.results))
        .then(setloader(false)) 

    },[type, category])
    return data
}

export default useFetch