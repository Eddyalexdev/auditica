import {useState, useEffect} from 'react';

const useAudio = (url: string) => {
    const [audio, setAudio] = useState<HTMLAudioElement>(new Audio());

    useEffect(() => {
        const song = new Audio(url);
        setAudio(song)
    }, [url])

    const play = () => audio.play();
    const pause = () => audio.pause();

    return {audio, play, pause};

}

export default useAudio;