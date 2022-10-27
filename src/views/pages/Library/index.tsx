import React from 'react'
import Banner from '../../../components/Banner'
import RecentlyPlayed from '../../../components/RecentlyPlayed'
import {Link} from 'react-router-dom';
import ListLibrary from '../../../components/ListLibrary';

function Library() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Listas de Reproduccion</h1>
      <ListLibrary />
    </div>
  )
}

export default Library