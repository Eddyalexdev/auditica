import {useState} from 'react';
import {AiOutlineHeart, AiTwotoneHeart} from 'react-icons/ai';
import {HiMenuAlt4} from 'react-icons/hi';
import useActivate from '../../hooks/useActivate';

const Song = () => {
    const {isActivate, handleActivate} = useActivate();

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <span>1</span>
                <img className="w-10 h-10 object-cover" src="https://i.ytimg.com/vi/bsmoFqvY5gw/maxresdefault.jpg" alt="song image"/>
                <h4 className="">All Want For Christmas is You</h4>
            </div>
            <span className="text-grey">Maria Carey</span>
            <span className="text-grey">Album</span>
            <div className='flex items-center gap-4'>
                <span>3:54</span>
                <button onClick={handleActivate}>
                    {
                        isActivate ?
                            <AiTwotoneHeart size={20}/>:
                            <AiOutlineHeart size={20}/>
                    }
                </button>
                <button>
                    <HiMenuAlt4 size={20}/>
                </button>
            </div>
        </div>
    )
}

export default Song;