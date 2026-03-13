import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-6'>
        <h1 className='text-3xl font-bold'>Media Search</h1>
        <div className='flex gap-5'>
            <Link to='/' className='text-2xl font-semibold'>Home</Link>
            <Link to='/collection' className='text-2xl font-semibold'>Collection</Link>
        </div>
    </div>
  )
}

export default Navbar