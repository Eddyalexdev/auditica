export const sliderVariants = {
    hidden: (slider: number) => {
        return {
            y: slider > 0 ? 1000:-1000,
            opacity: 0
        }
    },

    visible: {
        zIndex: 1,
        y: 0,
        opacity: 1
    },

    exit: (slider: number) => {
       return {
            zIndex: 0,
            y: slider < 0 ? 1000:-1000,
            opacity: 0
       } 
    }
}
