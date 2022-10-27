import Navigation from '../../components/Navigation';
import ListLibrary from '../../components/Navigation/ListLibrary';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="w-60 px-5 bg-black-100 min-h-screen relative">
      <Logo />
      <Navigation />
      <ListLibrary />
    </header>
  )
}

export default Header;