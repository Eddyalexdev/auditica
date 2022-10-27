import {createSlice} from '@reduxjs/toolkit';

export const songsSlice = createSlice({
  name: 'libraries',
  initialState: {
    libraries: []
  },

  reducers: {

  }
})

export const songsReducer = songsSlice.reducer;
