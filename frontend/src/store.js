import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import basketReducer from './basketSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    basket: basketReducer,
  },
});
