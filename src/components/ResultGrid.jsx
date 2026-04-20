import { useDispatch, useSelector } from "react-redux"
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/mediaAPI"
import { useEffect, useState } from "react"
import { setError, setLoading, setResults } from "../redux/features/searchSlice"
import ResultCard from "./ResultCard"
import InfiniteScroll from "react-infinite-scroll-component";


const ResultGrid = () => {
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

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
        if (!query) return

        setPage(1)
        setHasMore(true)

        const getData = async () => {

            try {
                dispatch(setLoading())
                let data

                if (activeTab == 'all') {
                    let [photoRes, videoRes, gifRes] = await Promise.all([fetchPhotos(query, 1), fetchVideos(query, 1), fetchGIF(query, 1)])

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
                    let res = await fetchPhotos(query, 1)
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
                    let res = await fetchVideos(query, 1)
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
                    let res = await fetchGIF(query, 1)
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

    const fetchMoreData = async () => {
        if (loading) return

        setPage((prev) => prev + 1)

        try {
            let data

            if (activeTab == 'all') {
                let [photoRes, videoRes, gifRes] = await Promise.all([fetchPhotos(query, 1), fetchVideos(query, 1), fetchGIF(query, 1)])

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
                let res = await fetchPhotos(query, page)
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
                let res = await fetchVideos(query, page)
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
                let res = await fetchGIF(query, page)
                data = res.data.map((item) => ({
                    id: item.id,
                    type: 'GIF',
                    thumbnail: item.images.original.url,
                    title: item.title,
                    src: item.images.fixed_height.url,
                    url: item.url
                }))
            }

            if (!data || data.length === 0) {
                setHasMore(false)
                return
            }

            dispatch(setResults([...results, ...data]))
        } catch (err) {
            dispatch(setError(err.message))
        }
    }

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>



    return (
        <InfiniteScroll
            dataLength={results.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4 className="text-center">Loading...</h4>}
        >
            <div className='columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-x-5 gap-y-5 p-6'>
                {results.map((item) => (
                    <div key={item.id} className="mb-5 break-inside-avoid">
                        <ResultCard item={item} />
                    </div>
                ))}
            </div>
        </InfiniteScroll>
    )
}

export default ResultGrid