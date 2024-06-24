import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  basket: { items: [], subTotal: 0, total: 0 },
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addItemOnBasket: (state, action) => {
      const menuItem = {
        ...action.payload,
        id: uuidv4(),
        idItem: action.payload?.id,
      };

      let newItemArray = state.basket.items;
      newItemArray.push(menuItem);

      state.basket = {
        ...state.basket,
        subTotal: state.basket.subTotal + menuItem.price,
        total: state.basket.total + menuItem.price,
        items: newItemArray,
      };
    },
    incrementItemOnBasket: (state, action) => {
      let newItemArray = state.basket.items;
      const menuItemId = action.payload;
      const menuItem = newItemArray.find((item) => item?.id === menuItemId);
      const menuItemIndex = newItemArray.findIndex(
        (item) => item?.id === menuItemId
      );

      if (menuItem) {
        newItemArray[menuItemIndex] = {
          ...newItemArray[menuItemIndex],
          quantity: newItemArray[menuItemIndex]?.quantity + 1,
          price:
            newItemArray[menuItemIndex]?.price +
            newItemArray[menuItemIndex]?.unitPrice,
        };

        state.basket = {
          ...state.basket,
          subTotal: state.basket.subTotal + menuItem.unitPrice,
          total: state.basket.total + menuItem.unitPrice,
          items: newItemArray,
        };
      }
    },
    removeItemFromBasket: (state, action) => {
      const idRemove = action.payload;
      let newItemArray = state.basket.items;
      const menuItem = newItemArray.find((item) => item?.id === idRemove);
      const menuItemIndex = newItemArray.findIndex(
        (item) => item?.id === idRemove
      );

      if (menuItem) {
        if (menuItem?.quantity > 1) {
          newItemArray[menuItemIndex] = {
            ...newItemArray[menuItemIndex],
            quantity: newItemArray[menuItemIndex]?.quantity - 1,
            price:
              newItemArray[menuItemIndex]?.price -
              newItemArray[menuItemIndex]?.unitPrice,
          };
        } else {
          newItemArray = newItemArray.filter((item) => item?.id != idRemove);
        }

        state.basket = {
          ...state.basket,
          subTotal: state.basket.subTotal - menuItem.unitPrice,
          total: state.basket.total - menuItem.unitPrice,
          items: newItemArray,
        };
      }
    },
    resetBasket: (state) => {
      state.basket = initialState.basket;
    },
  },
});

export const {
  addItemOnBasket,
  incrementItemOnBasket,
  removeItemFromBasket,
  findIdOnBasket,
  resetBasket,
} = menuSlice.actions;

export default menuSlice.reducer;
