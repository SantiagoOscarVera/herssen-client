import { createSlice } from '@reduxjs/toolkit';
/* import { createArtist } from './artistAPI'; */
import { STATUS_API } from '../../../utils/constantes';

export const artistSlice = createSlice({
  name: 'artist',
  initialState: { artist: [], status: STATUS_API.IDLE, error: null },
  reducers: {
    createArtistStart: (state) => {
      state.status = STATUS_API.LOADING;
    },
    createArtistSuccess: (state, action) => {
      state.status = STATUS_API.SUCCEEDED;
      state.patients.push(action.payload);
    },
    createArtistFailure: (state, action) => {
      state.status = STATUS_API.FAILED;
      state.error = action.payload;
    },
  },
});

export const { createArtistStart, createArtistSuccess, createArtistFailure } = artistSlice.actions;

export const createArtistAsync = (artist) => async (dispatch) => {
  try {
    dispatch(createArtistStart());
    const response = await createArtist(artist);
    dispatch(createArtistSuccess(response.data));
  } catch (err) {
    dispatch(createArtistFailure(err.toString()));
  }
};


export default artistSlice.reducer;
