import {motion} from 'framer-motion';
import SliderInfo from './SliderInfo';
import {sliderVariants} from './variants';

const SliderItem = ({image, slider, id}: {image: string, slider:number, id:number}) => {
    return (
        <motion.div
            custom = {slider}
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={sliderVariants}
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }}
        >
            <img src={image} className="brightness-50 w-full" />
            <SliderInfo />
        </motion.div>
    )
}

export default SliderItem;