import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    function submitHandler(e){
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }

  return (
    <div className=''>
        <form onSubmit={submitHandler}
            className='flex gap-5 p-3 w-full'
            >
            <input
            className='px-4 py-2 rounded border outline-none w-full' 
            type="text"
            placeholder='Search'

            value={text}
            onChange={(e)=>{
                setText(e.target.value)
            }}
            />

              <button type='submit' className='px-4 py-2 rounded border outline-none cursor-pointer active:scale-95'>
                Search
            </button>
        </form>
    </div>
  )
}

export default SearchBar