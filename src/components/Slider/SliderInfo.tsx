import {AiOutlineHeart} from 'react-icons/ai';
import {AiTwotoneHeart} from 'react-icons/ai';
import {SlOptions} from 'react-icons/sl';
import useActivate from '../../hooks/useActivate';

const SliderInfo = () => {
    const {isActivate, handleActivate} = useActivate();

    return (
        <div className="absolute right-10 bottom-5 flex flex-col items-end">
            <span className="text-xs tracking-widest font-semibold mb-3">FEATURED SONGS</span>
            <h3 className="font-light text-lg tracking-widest">Post Malone</h3>
            <h2 className="mb-6 font-semibold text-4xl">Circles</h2>
            <div className="flex gap-5 items-center">
                <button>
                    <SlOptions size={25}/>
                </button>
                <button onClick={handleActivate}>
                    {
                         isActivate? 
                            <AiTwotoneHeart size={25} />:
                            <AiOutlineHeart size={25} />
                    }
                </button>

                <button className="py-2 px-7 bg-red rounded font-semibold">
                    Play
                </button>
            </div>
        </div>
    )
}

export default SliderInfo;