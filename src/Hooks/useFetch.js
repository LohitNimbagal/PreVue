import React, { useEffect, useState } from 'react'
import envVariables from '../envVariables/envVariables'

const useFetch = (type, category) => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [list, setList] = useState([])

    useEffect(()=>{
        (async () => {

        try {
            const response = await fetch(`https://api.themoviedb.org/3/${type}/${category}?api_key=${envVariables.apiKey}&language=en-US`)
            const result = await response.json()
            setList(result.results)
        } catch (error) {
            console.log('error')
        }

        })()
    }, [])

    return list
}



export default useFetch