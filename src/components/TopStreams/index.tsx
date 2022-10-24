import React from 'react'
import SongStream from './SongStream'

function index() {
  return (
    <div className='mb-10 h-128 overflow-hidden bg-black-semibold rounded w-full pt-4 px-4'>
        <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">Top Streams Real-Time</h2>
        </div>
        <div className="flex flex-col">
            <SongStream />
            <SongStream />
            <SongStream />
            <SongStream />
            <SongStream />
            <SongStream />
            <SongStream />
            <SongStream />
            <SongStream />
        </div>
    </div>
  )
}

export default index