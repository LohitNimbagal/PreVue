import { useState, useEffect } from "react"
import envVariables from "../../envVariables/envVariables"

function WatchProvider({info}) {

    const {id, type} = info

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)
    const [comingSoon, setComingSoon] = useState(false)

    useEffect(() => {

    if (id && type) {
        (async () => {
            try {
                setIsLoading(true);
                setComingSoon(false)
        
                const response = await fetch (`https://api.themoviedb.org/3/${type}/${id}/watch/providers?api_key=${envVariables.apiKey}`)
                const result = await response.json()
                        
                if (result.results.IN) {
                    setData(result.results.IN)
                } else {
                    setComingSoon(true)
                }
                    
            } catch (error) {
                setError(true)
                console.log(error);
            }
            finally {
                setIsLoading(false)
            }
            }) ()
        }}, [id])

        const providers = (providersList) => {

        return (
            <div className="flex">
                {providersList.map((provider) =>(
                    <div key={provider.provider_name}>
                        <img
                        src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`} alt="provider.provider_name" className="w-12 m-2 rounded-xl p-1" />
                    </div>
                ))}
            </div>
        )

        }

        if (data) {
            if (data.buy) {
              return providers(data.buy);
            }
            if (data.rent) {
              return providers(data.rent);
            }
            if (data.flatrate) {
              return providers(data.flatrate);
            }
          } else if (comingSoon) {
            return <h1>Coming Soon</h1>
          }
          return null;
} 

export default WatchProvider