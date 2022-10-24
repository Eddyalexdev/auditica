import {useLocation, useNavigate} from 'react-router-dom';

interface IProps {
    children: React.ReactNode, 
    to: string,
    icon?: JSX.Element
}



const NavLink = ({children, to, icon}: IProps) => {
    const location = useLocation();
    const navigation = useNavigate();

    const navigateTo = () => {
        navigation(to);
    }

    return (
        <button 
            onClick={navigateTo} 
            className={`flex gap-2 ${location.pathname === to && 'bg-red'} text-white items-center rounded py-3 px-2 min-w-full font-semibold`}
        >
            {icon}
            <span>{children}</span>
        </button>
    )
}

export default NavLink;