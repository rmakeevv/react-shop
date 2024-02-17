import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    items: [],
    userId: null,
  },
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value = {
        items: [
          ...state.value.items,
          { ...action.payload, basketItemId: Date.now() },
        ],
        userId: state.value.userId,
      };
    },
    removeItem: (state, action) => {
      state.value = {
        items: [...state.value.items].filter(
          (item) => item.basketItemId !== action.payload
        ),
        userId: state.value.userId,
      };
    },
    checkOut: (state) => {
      state.value = {
        items: [],
        userId: state.value.userId,
        isOrdered: true,
      };
    },
    authUser: (state, action) => {
      state.value = {
        items: [...state.value.items],
        userId: action.payload,
      };
    },
  },
});

export const { addItem, removeItem, checkOut, authUser } = basketSlice.actions;

export default basketSlice.reducer;
