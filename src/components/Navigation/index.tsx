import NavLink from './NavLink';
import {AiFillHome} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import { BsHeadphones } from 'react-icons/bs';
import {AiOutlineAppstore} from 'react-icons/ai';


const Navigation = () => {
    return (
        <nav className="flex flex-col w-full">
            <NavLink to="/" icon={<AiFillHome />}>
                Home
            </NavLink>
            <NavLink to="/new2" icon={<AiOutlineAppstore />}>
                Browse 
            </NavLink>
            <NavLink to="/favorites" icon={<AiOutlineHeart />}>
                Favorites
            </NavLink>
            <NavLink to="/new" icon={<BsHeadphones />}>
                Library 
            </NavLink>
        </nav>
    )
}

export default Navigation;