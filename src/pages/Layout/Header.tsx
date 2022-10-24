import {Link} from 'react-router-dom';

import Navigation from '../../components/Navigation';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="w-60 px-5 bg-black-100 min-h-screen relative">
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header;
