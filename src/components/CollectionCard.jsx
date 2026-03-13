import { useDispatch } from "react-redux"
import { removeCollection, removeCollectionToast } from "../redux/features/collectionSlice"

const CollectionCard = ({item}) => {

    const dispatch = useDispatch()

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item))
        dispatch(removeCollectionToast())
    }

    return (
        <div className='w-60 h-80 bg-white relative rounded overflow-hidden'>
            <a href={item.url} target='_blank'>
                <div className='h-full'>
                    {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                    {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src} > </video> : ''}
                    {item.type == 'GIF' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                </div>
            </a>
            <div className='flex justify-between items-center gap-2 absolute bottom-0 capitalize w-full bg-linear-to-t from-black to-transparent p-2'>
                <h1 className='text-lg font-semibold '>{item.title}</h1>
                <button className='bg-blue-700 px-3 py-1 rounded hover:bg-blue-800 active:scale-95 font-semibold'
                
                onClick={() => {
                    removeFromCollection(item)
                }}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CollectionCard