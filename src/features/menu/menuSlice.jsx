import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  basket: { items: [], total: 0 },
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addItemOnBasket: (state, action) => {
      const item = {
        ...action.payload,
        id: uuidv4(),
        idItem: action.payload?.id,
      };

      let newItemArray = state.basket.items;
      newItemArray.push(item);

      state.basket = {
        ...state.basket,
        items: newItemArray,
      };
    },
    removeItemFromBasket: (state, action) => {
      const idRemove = action.payload;
      let newItemArray = state.basket.items;
      newItemArray = newItemArray.filter((item) => item?.id != idRemove);

      state.basket = {
        ...state.basket,
        items: newItemArray,
      };
    },
    findIdOnBasket: (state, action) => {
      const itemId = action.payload;
      const items = state.basket.items.filter(
        (item) => item?.idItem === itemId
      );
      return items?.length;
    },
    resetBasket: (state) => {
      state = initialState;
    },
  },
});

export const {
  addItemOnBasket,
  removeItemFromBasket,
  findIdOnBasket,
  resetBasket,
} = menuSlice.actions;

export default menuSlice.reducer;
