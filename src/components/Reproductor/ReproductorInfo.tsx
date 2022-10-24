import {motion} from 'framer-motion';

function ReproductorInfo({audio}: {audio: HTMLAudioElement}) {
    return (
        <div className="flex gap-16 w-1/3">
            <img className="w-10 h-10 object-cover" src="https://i.ytimg.com/vi/bsmoFqvY5gw/maxresdefault.jpg" alt="reproductor image" />
            <div className="flex flex-col items-center">
                <div className="flex gap-3">
                    <h3 className="font-bold text-md"> On The Ground</h3> 
                    <span>|</span>
                    <span className="text-grey">Rose</span>
                </div>
                <div className="flex gap-3 items-center">
                    <span className="text-sm">2:45</span>
                    <div className="w-96 relative h-1 rounded-full bg-grey">
                        <motion.div 
                            className="absolute left-0 top-0 h-1 rounded-full bg-red" 
                            initial={{width: audio.currentTime}}
                            animate={{width: '100%'}}
                            transition={{ease: 'linear', duration:3}}
                        ></motion.div>
                    </div>
                    <span className="text-sm">3:27</span>
                </div>
            </div>
        </div>
    )
}

export default ReproductorInfo