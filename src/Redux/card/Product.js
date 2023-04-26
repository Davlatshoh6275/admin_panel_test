import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import Base_Url from "../Base_Url";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const res = await axios.get(Base_Url);
      return res.data;
    } catch (err) {
      return [];
    }
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
  },

  reducers: {
    removeProduct(state, action) {
      state.products = state.products.filter(
        (products) => products._id !== action.payload._id
      );
    },
  },

    extraReducers(builder) {
      builder

        .addCase(fetchProducts.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.status = "success";
          state.products = [...action.payload];
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.status = "fail";
        });
    },
});

export default ProductSlice.reducer;

export const selectAllProducts = (state) => state.products.products;
