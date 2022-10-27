import React from 'react'
import {Link} from 'react-router-dom';

function Library() {
    return (
        <Link to="/library/sdfs" className="p-2">
            <img src='https://cdn4.vectorstock.com/i/1000x1000/94/83/music-speakers-background-album-cover-poster-vector-33029483.jpg' className="w-full h-28 bg-black mb-2 object-cover" alt='list image' />
            <h2 className="font-semibold text-xl">Lista numero 1</h2>
            <p className="text-sm">de: Eddy Alex</p>
        </Link>
    )
}

export default Library