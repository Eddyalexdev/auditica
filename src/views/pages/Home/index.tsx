import Slider from '../../../components/Slider';
import Filter from '../../../components/Filter';
import Releases from '../../../components/Releases';
import MayLike from '../../../components/MayLike';
import RecentlyPlayed from '../../../components/RecentlyPlayed';

const Home = () => {
  return (
    <div>
      <div className="relative mb-5">
        <Filter />
        <Slider />
      </div>
      <Releases />
      <MayLike />
      <RecentlyPlayed />
    </div>
  )
}

export default Home;
