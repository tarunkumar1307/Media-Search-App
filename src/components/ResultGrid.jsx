import { useDispatch, useSelector } from "react-redux"
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/mediaAPI"
import { useEffect } from "react"
import { setError, setLoading, setResults } from "../redux/features/searchSlice"
import ResultCard from "./ResultCard"


const ResultGrid = () => {
    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    const shuffleArray = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
                ;[arr[i], arr[j]] = [arr[j], arr[i]]
        }
        return arr
    }

    useEffect(() => {
        if(!query) return

        const getData = async () => {

            try {
                dispatch(setLoading())
                let data

                if (activeTab == 'all') {
                    let [photoRes, videoRes, gifRes] = await Promise.all([fetchPhotos(query), fetchVideos(query), fetchGIF(query)])

                    let photos = photoRes.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        thumbnail: item.urls.small,
                        title: item.alt_description,
                        src: item.urls.full,
                        url: item.links.html
                    }))

                    // let videos = videoRes.videos.map((item) => ({
                    //     id: item.id,
                    //     type: 'video',
                    //     thumbnail: item.image,
                    //     title: item.user.name || 'Video',
                    //     src: item.video_files[0].link,
                    //     url: item.url
                    // }))

                    let gifs = gifRes.data.map((item) => ({
                        id: item.id,
                        type: 'GIF',
                        thumbnail: item.images.original.url,
                        title: item.title,
                        src: item.images.fixed_height.url,
                        url: item.url
                    }))

                    const minLength = Math.min(photos.length, gifs.length)
                    let mixed = []

                    for (let i = 0; i < minLength; i++) {
                        mixed.push(photos[i], gifs[i])
                    }

                    data = shuffleArray(mixed)
                }

                else if (activeTab == 'photo') {
                    let res = await fetchPhotos(query)
                    data = res.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        thumbnail: item.urls.small,
                        title: item.alt_description,
                        src: item.urls.full,
                        url: item.links.html
                    }))

                }

                else if (activeTab == 'video') {
                    let res = await fetchVideos(query)
                    data = res.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        thumbnail: item.image,
                        title: item.user.name || 'Video',
                        src: item.video_files[0].link,
                        url: item.url
                    }))
                }
                else if (activeTab == 'GIF') {
                    let res = await fetchGIF(query)
                    data = res.data.map((item) => ({
                        id: item.id,
                        type: 'GIF',
                        thumbnail: item.images.original.url,
                        title: item.title,
                        src: item.images.fixed_height.url,
                        url: item.url
                    }))
                }
                dispatch(setResults(data || []))
            } catch (err) {
                dispatch(setError(err.message))
            }
        }
        getData()

    }, [query, activeTab])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading...</h1>

    return (
        <div className='columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-x-5 gap-y-5 p-6'>
            {results.map((item) => (
                <div key={item.id} className="mb-5 break-inside-avoid">
                    <ResultCard item={item} />
                </div>
    ))}
        </div>
    )
}

export default ResultGrid