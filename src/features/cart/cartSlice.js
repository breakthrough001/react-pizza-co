import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartState: [],
};

const cartSlice = createSlice({
  name: 'cart', // name comes from what you called it in the store.js file
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cartState.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cartState = state.cartState.filter(
        (item) => item.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cartState.find(
        (item) => item.pizzaId === action.payload,
      );
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreateItemQuantity(state, action) {
      const item = state.cartState.find(
        (item) => item.pizzaId === action.payload,
      );
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cartState = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreateItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// Selector functions

export const getCart = (state) => state.cart.cartState;

export const getTotalCartQuantity = (state) =>
  // cart.cart bc it is called cart and you need to access cart inside of it
  state.cart.cartState.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cartState.reduce((sum, item) => sum + item.totalPrice, 0);
