import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photo', 'video', 'GIF']

    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className='flex gap-5 justify-center pt-5'>
        {tabs.map((elem, idx) => {
            return (
                <button
                key={idx}
                className={`${activeTab == elem ?'bg-emerald-800':'bg-white text-black'} capitalize px-4 py-2 text-xl  rounded cursor-pointer active:scale-95 transition`}

                onClick={()=>{
                   dispatch(setActiveTab(elem)) 
                }}
                >
                    {elem}
                </button>
            )
        })}
    </div>
  )
}

export default Tabs