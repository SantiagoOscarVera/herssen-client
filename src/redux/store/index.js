import { configureStore } from '@reduxjs/toolkit';
import artistReducer from './artist/artistSlice';

export const store = configureStore({
  reducer: {
    artist: artistReducer,
  },
});
