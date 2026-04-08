import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdSunny } from "react-icons/md";
import { FiSun } from "react-icons/fi";
// import { TiMediaEject } from "react-icons/ti";
import { Library } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/features/uiSlice';

const Navbar = () => {
    const theme = useSelector((store) => store.ui.theme)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.classList.toggle('dark', theme === 'dark')
    }, [theme])



    return (
        <div className='flex justify-between 
  bg-(--navbar-bg) 
  text-(--navbar-text)
  px-10 py-3 items-center shadow-md'>

            <div className='font-bold flex items-center gap-4'>
                <Library size={45} className="text-(--navbar-text)" />
                <h1 className='text-2xl font-semibold tracking-tight'>
                    Media Search
                </h1>
            </div>

            <div className='flex gap-5 font-bold items-center'>
                <Link
                    to='/'
                    className='text-xl font-medium px-4 py-2 rounded-full 
      hover:bg-black/10 dark:hover:bg-white/10 
      active:scale-95 transition-all'>
                    Home
                </Link>

                <Link
                    to='/collection'
                    className='text-xl font-medium px-4 py-2 rounded-full 
      hover:bg-black/10 dark:hover:bg-white/10 
      active:scale-95 transition-all'>
                    Collection
                </Link>

                <button
                    className='w-10 h-10 rounded-full flex items-center justify-center 
      active:scale-95 transition-all'
                    onClick={() => dispatch(toggleTheme())}
                >
                    {theme === 'light'
                        ? <FiSun className='text-2xl' />
                        : <MdSunny className='text-2xl' />}
                </button>
            </div>
        </div>
    )
}

export default Navbar