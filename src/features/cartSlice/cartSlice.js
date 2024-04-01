// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};
function totalCalculatePrice(state) {
  let amount = 0;
  state.items.forEach((element) => {
    amount = Number(element.price.slice(1)) + amount;
  });
  state.totalPrice = amount;
}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.title === action.payload.title
      );
      if (!existingItem) {
        state.items.push(action.payload);
        totalCalculatePrice(state);
      }
    },
    removeFromCart: (state, action) => {
      const data = state.items.filter((element) => {
        return element.title !== action.payload.title;
      });
      state.items = data;
      totalCalculatePrice(state);
    },

    updateQuantityByTitle: (state, action) => {
      const { title, newQuantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.title === title);
      if (itemToUpdate && newQuantity > 0) {
        itemToUpdate.quantity = newQuantity;
        // totalCalculatePrice(state);
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantityByTitle } =
  cartSlice.actions;

export default cartSlice.reducer;
