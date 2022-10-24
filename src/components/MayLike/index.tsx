import {Link} from 'react-router-dom';
import ArtistCard from '../ArtistCard';

const MayLike = () => {
    return (
        <div className="mb-10">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold">You May Like</h2>
                <Link to="/" className="text-red-100 text-base">
                    See more
                </Link>
            </div>

            <div className="flex gap-12">
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
            </div>
        </div>
    )
}

export default MayLike;