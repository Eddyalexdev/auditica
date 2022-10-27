import {useState} from 'react';

const useActivate = (): {isActivate: boolean, handleActivate: any}  => {
    const [isActivate, setIsActivate] = useState<boolean>(false);
    const handleActivate = () => {
        setIsActivate(!isActivate)
    };

    return {isActivate, handleActivate};
}

export default useActivate;