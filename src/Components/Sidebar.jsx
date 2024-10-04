import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='mt-10 px-7 flex flex-row '>
      {/* Sidebar */}
      <div className='flex flex-col gap-7 text-2xl text-blue-500'>
        <Link to="/products">Get all products</Link> 
        <Link to="/">Get all categories</Link>
      </div>

      {/* Content */}
      
    </div>
  )
}

export default Sidebar;
