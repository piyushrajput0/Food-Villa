import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array of { id, quantity } objects
    count: 0,
  },
  reducers: {
    addItems: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
      state.count+=1;
    },
    removeItems: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          // If quantity is 1, remove the item completely
          state.items = state.items.filter(item => item.id !== id);
        } else {
          // If quantity is greater than 1, decrement quantity
          existingItem.quantity -= 1;
        }
      }
      state.count-=1;
    },
    clearItems: (state) => {
      state.items = []; // Clear all items from the cart
      state.count=0;
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
