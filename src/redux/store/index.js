import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import clientReducer from './client/clientSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    client: clientReducer
  },
});
