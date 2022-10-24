import { Link } from "react-router-dom";
import AlbumCard from "../AlbumCard";

const Releases = () => {
    return (
        <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold">New Releases</h2>
                <Link to="/" className="text-red-100 text-base">
                    See more
                </Link>
            </div>
            <div className="flex gap-5 w-full overflow-hidden">
                <AlbumCard />
                <AlbumCard />
            </div>
        </div>
    )
}

export default Releases;