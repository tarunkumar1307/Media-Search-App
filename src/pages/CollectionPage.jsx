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
    <div className=''>
      <div className='flex justify-between  px-12'>
        <h1 className='text-2xl'>Collection Page</h1>
        <button className='bg-red-600 text-white px-4 py-2 rounded text-base font-bold active:scale-95 hover:bg-red-800'
          onClick={() => {
            emptyCollection()
          }}
        >
          Clear Collection
        </button>
      </div>

      <div className='flex flex-wrap justify-between gap-5 p-15'>
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CollectionPage