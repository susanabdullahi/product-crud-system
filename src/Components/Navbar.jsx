import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center p-4'>
        {/* logo */}
        <div>
            <h1 className='text-3xl font-bold font-serif'>CRUD-APP</h1>
        </div>
        {/* links */}
        <div className='text-3xl font-bold px-10'>
            <Link to="/">Home</Link>  
        </div>

    </div>
  )
}

export default Navbar