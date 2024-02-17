import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import basketReducer from '../features/basketSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    basket: basketReducer,
  },
});
