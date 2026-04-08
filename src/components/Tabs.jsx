import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['all', 'photo', 'video', 'GIF']

    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)

  return (
      <div className='flex gap-5 justify-center'>
        {tabs.map((elem, idx) => {
            return (
                <button
                key={idx}
                    className={`
                        ${activeTab == elem
                            ? 'bg-(--color-primary) text-(--navbar-text)'
                            : 'bg-(-color-card) text-(--color-primary)'
                        } 
                        border-2 border-(--color-primary) text-(--color-primary) capitalize px-4 py-2 text-xl  rounded-full cursor-pointer active:scale-95 transition   `}

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