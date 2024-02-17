import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    isLogged: false,
    userId: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.value = {
        isLogged: true,
        userId: action.payload,
      };
    },
    logOut: (state) => {
      state.value = {
        isLogged: false,
        userId: null,
      };
    },
  },
});

export const { logOut, logIn } = authSlice.actions;

export default authSlice.reducer;
