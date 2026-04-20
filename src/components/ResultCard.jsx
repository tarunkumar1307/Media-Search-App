import { useDispatch, useSelector } from "react-redux"
import { addCollection, addCollectionToast } from "../redux/features/collectionSlice"
import { Bookmark } from 'lucide-react';
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";

const ResultCard = ({ item }) => {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.ui.theme)

    const collection = useSelector(state => state.collection.items)

    const saveInCollection = (item) => {
        dispatch(addCollection(item))
        dispatch(addCollectionToast())
    }

    return (
        <div className='w-full bg-(--color-bg) rounded overflow-hidden'>

            <div className="relative rounded overflow-hidden">
                <div className="absolute bg-black/10 top-2 left-2 text-white text-xs px-2 py-1 rounded z-10">
                    <div className="capitalize">
                        {item.type}
                    </div>
                </div>

                <a href={item.url} target='_blank' className="">
                    {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                    {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src} > </video> : ''}
                    {item.type == 'GIF' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                </a>
            </div>

            <div className='flex justify-between items-center px-2'>

                <h1 className='text-sm font-semibold text-(--color-text) capitalize truncate'>
                    {item.title}
                </h1>

                <button
                    className='p-2 rounded-full active:scale-95 transition text-(--color-primary) hover:bg-white/10 cursor-pointer'
                    onClick={() => saveInCollection(item)}
                >
                    {collection.some((itm) => itm.id === item.id)
                        ? <FaBookmark className="text-lg" />
                        : <FaRegBookmark className="text-lg" />
                    }
                </button>
            </div>
        </div>
    )
}

export default ResultCard