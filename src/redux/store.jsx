import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice/cardSlice";
import productSlice from "./productSlice/productSlice";

const store = configureStore({
  reducer: {
    card: cardSlice,
    product: productSlice,
  },
});
export default store;
