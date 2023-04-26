import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./card/Product";

export const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});
