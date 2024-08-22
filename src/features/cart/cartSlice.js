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
    decreaseItemQuantity(state, action) {
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
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// Selector functions

export const getCart = (state) => state.cart.cartState;

export const getTotalCartQuantity = (state) =>
  state.cart.cartState.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cartState.reduce((sum, item) => sum + item.totalPrice, 0);

// ID is the argument, try to find an item in the cart that matches the id passed in as an argument, use optional chaining to say if there is one get the quantity, if not then return 0.
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cartState.find((item) => item.pizzaId === id)?.quantity ?? 0;
// go into the cart items and loop through them, if the item matches the item id passed in, check to see if it has a quantity, if not leave it at 0
