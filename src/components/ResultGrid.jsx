import { useDispatch, useSelector } from "react-redux"
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/mediaAPI"
import { useEffect } from "react"
import { setError, setLoading, setResults } from "../redux/features/searchSlice"


const ResultGrid = () => {
    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    useEffect(() => {
        if(!query) return

        const getData = async () => {

            try {
                dispatch(setLoading())
                let data
                if (activeTab == 'photo') {
                    let res = await fetchPhotos(query)
                    data = res.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        thumbnail: item.urls.small,
                        title: item.alt_description,
                        src: item.urls.full
                    }))

                }
                if (activeTab == 'video') {
                    let res = await fetchVideos(query)
                    data = res.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        thumbnail: item.image,
                        title: item.user.name || 'Video',
                        src: item.video_files[0].link
                    }))
                }
                if (activeTab == 'GIF') {
                    let res = await fetchGIF(query)
                    data = res.data.map((item) => ({
                        id: item.id,
                        type: 'GIF',
                        thumbnail: item.images.original.url,
                        title: item.title,
                        src: item.url
                    }))
                }
                dispatch(setResults(data))
            } catch (err) {
                dispatch(setError(err.message))
            }
        }
        getData()

    }, [query, activeTab])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading...</h1>

    return (
        <div>
            {results.map((item, idx) => {
                return (
                    <div>
                        <img className='h-30 w-30' src={item.src} alt="" />
                    </div>    
                )
            })}
        </div>
    )
}

export default ResultGrid