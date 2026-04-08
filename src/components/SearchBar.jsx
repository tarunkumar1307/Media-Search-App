import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
import { Search } from 'lucide-react';

const SearchBar = () => {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    function submitHandler(e) {
        e.preventDefault()
        dispatch(setQuery(text))
    }

    return (
        <div className='w-full'>
            <form onSubmit={submitHandler} className='flex w-full'>
                <div className={`flex items-center px-6 py-3 w-full bg-(--color-light) text-(--color-text) rounded-full gap-3 transition-all duration-300 shadow-[0_0px_8px_var(--shadow-color)] `}>

                    <input
                        className='w-full text-black outline-none bg-transparent placeholder-gray-400'
                        type="text"
                        placeholder='Search'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                    <button type='submit' className='cursor-pointer active:scale-95'>
                        <Search className='text-(--color-primary)' />
                    </button>
                </div>

            </form>
        </div>
    )
}

export default SearchBar