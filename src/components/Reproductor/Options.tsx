import {useState} from 'react'
import {AiOutlineHeart, AiTwotoneHeart} from 'react-icons/ai';
import {MdOutlinePlaylistAdd} from 'react-icons/md';
import {HiOutlineDotsHorizontal} from 'react-icons/hi';
import {BsFillVolumeUpFill} from 'react-icons/bs';

function Options() {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleToggleHeart = () => {
        setIsActive(!isActive);
    } 

    return (
        <div className="flex items-center justify-center border-l-1 border-grey w-1/3 gap-4">
            <button>
                <MdOutlinePlaylistAdd size={25}/>
            </button>
            <button onClick={handleToggleHeart}>
                {
                    isActive ?
                        <AiOutlineHeart size={20}/>:
                        <AiTwotoneHeart size={20}/>
                }
            </button>
            <button>
                <HiOutlineDotsHorizontal size={20}/>
            </button>
            <button>
                <BsFillVolumeUpFill size={20}/>
            </button>
        </div>

    )
}

export default Options