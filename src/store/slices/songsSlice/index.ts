import {createSlice} from '@reduxjs/toolkit';

export const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: [],
    favoriteSongs: [],
  },
  reducers: {

  }
})

export const songsReducer = songsSlice.reducer;
