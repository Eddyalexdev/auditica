import React from 'react'
import {Link} from 'react-router-dom';
import Category from './Category';

function Categories() {
  return (
    <div>
        <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold">Categories</h2>
            <Link to="/" className="text-red-100 text-xs">
                See more
            </Link>
        </div>
        <div className='grid grid-cols-2 gap-3'>
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
        </div>
    </div>
  )
}

export default Categories