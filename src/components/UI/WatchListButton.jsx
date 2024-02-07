import {useEffect, useState} from 'react'
import service from '../../appwrite/config'

function WatchListButton({details}) {

    const [list, setList] = useState([])
    const [info, setInfo] = useState({id: 0, type: "movie"})
    const [isWatchlisted, setIsWatchlisted] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        if (details) {
            if (details.number_of_seasons) {
                setInfo({id: details.id, type: "tv"})
            } else {
                setInfo({id: details.id, type: "movie"})
            }
        }
    }, [details])

    useEffect(() => {
        (async() => {
            const response = await service.listItems()
            setList(response.documents)

            const isAlreadyAdded = list.some(item => item.id === details.id);
            setIsWatchlisted(isAlreadyAdded)
        }) ()
    }, [list, isWatchlisted])

    
    const handelWatchList = async () => {
        setButtonDisabled(true)
        console.log("clicked");
        const isAlreadyAdded = list.some(item => item.id === details.id);
        try {
            if (!isAlreadyAdded) {
                const item = await service.createItem({poster_path: details.poster_path, id: details.id, title: details.title || details.name, media_type: info.type });
                console.log("added to watchlist");
            } else {
                const itemIdd = list.find(item => item.id === details.id);
                await service.deleteItem(itemIdd.$id);
                console.log("removed");
            }
        } catch (error) {
            setIsWatchlisted(isWatchlisted);
            console.error("Error:", error);
        }
        setButtonDisabled(false)
    }

  return (
    <>
        <button className='rounded bg-blue-400 my-1 py-1 px-2 font-bold' disabled={buttonDisabled} onClick={() => handelWatchList()}>
            {isWatchlisted ? "- Remove from Watchlist" : "+ Add to Watchlist" }
        </button>
    </>
  )
}

export default WatchListButton