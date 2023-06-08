import { createSlice } from '@reduxjs/toolkit';
/* import { createArtist } from './artistAPI'; */
import { getArtistUser, getBuyerUser, getJewelryUser } from '../../../components/service/users';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    getUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { getUser } = userSlice.actions;

//esta llamada hay que cambiarla cuando ya esten disponibles
//los usuarios reales en el back
export const getArtistTest = () => (dispatch) => {
  const response = getArtistUser();
  dispatch(getUser(response))
}

export const getJewelryTest = () => (dispatch) => {
  const response = getJewelryUser();
  dispatch(getUser(response))
}

export const getBuyerTest = () => (dispatch) => {
  const response = getBuyerUser();
  dispatch(getUser(response))
}

export default userSlice.reducer;
