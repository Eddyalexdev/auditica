import { configureStore } from '@reduxjs/toolkit';

import { songsReducer } from './slices';

export default configureStore({
  reducer: {
    songs: songsReducer,
  }
})
