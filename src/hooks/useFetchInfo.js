import React, { useEffect, useState } from 'react'
import envVariables from "../envVariables/envVariables"

function useFetchInfo({type, id}) {

    const [data, setData] = useState("")

    useEffect(() => {

        fetch (`https://api.themoviedb.org/3/${type}/${id}?api_key=${envVariables.apiKey}`)
        .then(res => res.json())
        .then(result => setData(result))

    }, [type, id])

    return data
}

export default useFetchInfo