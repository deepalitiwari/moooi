import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.title === newItem.title
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.totalPrice = calculateTotalPrice(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.title !== action.payload.title
      );
      state.totalPrice = calculateTotalPrice(state.items);
    },
    updateQuantityByTitle: (state, action) => {
      const { title, newQuantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.title === title);
      if (itemToUpdate && newQuantity > 0) {
        itemToUpdate.quantity = newQuantity;
        itemToUpdate.subtotal =
          newQuantity * Number(itemToUpdate.price.slice(1));
        state.totalPrice = calculateTotalPrice(state.items);
      }
    },
  },
});

const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => {
    return total + item.quantity * Number(item.price.slice(1));
  }, 0);
};

export const { addToCart, removeFromCart, updateQuantityByTitle } =
  cartSlice.actions;

export default cartSlice.reducer;
