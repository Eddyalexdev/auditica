import {useState} from 'react'
import {BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import {FiRepeat} from 'react-icons/fi';
import {AiFillPlayCircle, AiFillPauseCircle} from 'react-icons/ai';
import useActivate from '../../hooks/useActivate';

function Controls({audio}: {audio: HTMLAudioElement}) {
    const {isActivate, handleActivate} = useActivate();

    const handleReproductor = () => {
        handleActivate();
        isActivate ? 
            audio.pause():
            audio.play();
    }

    return (
        <div className="flex items-center w-1/3 justify-center gap-3">
            <button>
                <BiSkipPrevious size={30} />
            </button>
            <button onClick={handleReproductor}>
                {
                    isActivate ?
                        <AiFillPauseCircle size={40} />:
                        <AiFillPlayCircle size={40} />
                }
            </button>
            <button>
                <BiSkipNext size={30} />
            </button>
            <button onClick={() => audio.currentTime = 0 }>
                <FiRepeat size={20} />
            </button>
        </div>
    )
}

export default Controls