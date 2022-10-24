import { Outlet } from 'react-router-dom';
import Reproductor from '../../components/Reproductor';
import Header from './Header';
import TopStreams from '../../components/TopStreams';
import Categories from '../../components/Categories';

const Layout = () => {
  return (
    <div className="flex bg-black">
      <Header />
      <main className='py-5 px-14 w-4/6' >
        <Outlet />
      </main>
      <div className="w-80 pt-7">
        <TopStreams />
        <Categories />
      </div>
      <Reproductor />
    </div>
  );
}

export default Layout;
