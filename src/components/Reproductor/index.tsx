import {useState} from 'react';
import Controls from './Controls';
import Options from './Options';
import ReproductorInfo from './ReproductorInfo';
import useAudio from '../../hooks/useAudio';

const Reproductor = () => {
    const {audio} = useAudio('src/assets/music.mpeg');

    return (
        <div className="border-t-2 border-red z-20 fixed bottom-0 left-0 w-full flex bg-black py-4">
            <Controls audio={audio}/>
            <ReproductorInfo audio={audio}/>
            <Options />
        </div>
    )
}

export default Reproductor;