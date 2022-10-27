import React, {useState} from 'react'
import {AiFillHeart, AiFillPlayCircle} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';

function Banner() {
    const [isActivate, setIsActivate] = useState<boolean>(false);

    return (
        <div className="flex gap-5 items-center mb-10">
            <img className="w-80 h-80 object-cover bg-red rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXWjJH-w72XVi2FuEFkUD7UXD_9C3m6o0Cw&usqp=CAU" alt="library image"/>
            <div className="flex flex-col">
                <div className="flex flex-col mb-8 gap-3">
                    <h1 className="text-red-100 text-4xl font-bold">Tomorrow's tunes</h1>
                    <p className="text-base">orem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis orem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis orem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                    <span className="text-xs">64 songs - 16 hrs</span>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center py-1 px-3 rounded-full bg-red gap-1">
                        <AiFillPlayCircle />
                        <span>Play All</span>
                    </button>
                    <button className="bg-red p-2 rounded-full" onClick={() => setIsActivate(!isActivate)}>
                        {
                            isActivate ? 
                                <AiFillHeart />:
                                <AiOutlineHeart />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner