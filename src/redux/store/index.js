import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import basketReducer from "./shopping/basketSlices"

export const store = configureStore({
  reducer: {
    user: userReducer,
    basket: basketReducer,
  },
});
