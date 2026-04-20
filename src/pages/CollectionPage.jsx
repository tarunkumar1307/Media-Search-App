import CollectionCard from '../components/CollectionCard'
import { useDispatch, useSelector } from 'react-redux'
import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch()

  const emptyCollection = () => {
    dispatch(clearCollection())
  }

  return (
    <div className='pt-4'>
      <div className='flex justify-between  px-10'>
        <h1 className='text-2xl'>Collection Page</h1>
        <button className='bg-red-600 text-white px-4 py-2 rounded text-base font-bold active:scale-95 hover:bg-red-800'
          onClick={() => {
            emptyCollection()
          }}
        >
          Clear Collection
        </button>
      </div>

      <div className='columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-x-5 gap-y-5 p-6'>
        {collection.map((item) => (
          <div key={item.id} className="mb-5 break-inside-avoid">
            <CollectionCard item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CollectionPage