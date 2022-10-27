import React from 'react'
import Library from './Library';

function ListLibrary() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6'>
        <Library />
        <Library />
        <Library />
        <Library />
        <Library />
        <Library />
        <Library />
        <Library />
    </div>
  )
}

export default ListLibrary