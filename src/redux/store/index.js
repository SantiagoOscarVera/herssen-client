import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import clientReducer from './client/clientSlice';
import basketReducer from "./shopping/basketSlices"

export const store = configureStore({
  reducer: {
    user: userReducer,
    client: clientReducer,
    basket: basketReducer,
  },
});
