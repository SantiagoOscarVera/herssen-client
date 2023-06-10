import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import favoriteReducer from './favorites/favoriteSlice';
import basketReducer from "./shopping/basketSlices";
import detailReducer from './Detail/detailSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    favorite: favoriteReducer,
    basket: basketReducer,
    detail: detailReducer,
  },
});
