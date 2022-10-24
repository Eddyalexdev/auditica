import {useState} from 'react';
import {AnimatePresence} from 'framer-motion';
import SliderItem from './SliderItem';

const topSongs = [
    {
        id: 1,
        image: 'https://i.ytimg.com/vi/u_wB6byrl5k/maxresdefault.jpg'
    },
    {
        id: 2,
        image: 'https://i.ytimg.com/vi/u_wB6byrl5k/maxresdefault.jpg'
    }
]

const Slider = () => {

    const [sliderNumber, setSliderNumber] = useState<number>(0);

    const sliderTo = (id:number) => {
        setSliderNumber(id);
    }

    return (
        <AnimatePresence>
            <div className="h-96 overflow-hidden">
                <ul className="absolute bottom-10 left-10 z-10">
                    { 
                        topSongs.map(song => <li key={song.id}><button onClick={() => sliderTo(song.id)}>{song.id}</button></li>)
                    }
                </ul>

                {
                    topSongs.map(song => <SliderItem image={song.image} slider={sliderNumber} key={song.id} id={song.id} />)
                }
            </div>
        </AnimatePresence>
    )
}

export default Slider;