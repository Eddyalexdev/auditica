import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai';

function SongStream() {
  return (
    <div className="flex items-center justify-between border-b border-grey py-3">
        <div className="flex gap-2 items-center">
            <span>1</span>
            <img className="w-10 h-10 object-cover" src="https://los40.com/los40/imagenes/2017/11/28/album/1511885438_220718_1512040981_album_normal.jpg" alt="image stream song"/>
            <div className='flex flex-col'>
                <h3 className="text-xs font-semibold">Mistleotle</h3>
                <span className="font-light text-grey text-xs">Justin Bieber</span>
            </div>
        </div>
        <div className="flex items-center gap-3">
            <span className='text-xs'>3:54</span>
            <AiOutlineHeart color={'#7A8580'} />
        </div>
    </div>
  )
}

export default SongStream