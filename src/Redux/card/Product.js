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

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id, { dispatch }) => {
    for (let i of id) {
      const { data } = await axios.delete(`${Base_Url}/${i}`);
      return removeProduct(data)
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
      for (let i of action.payload) {
        state.products = state.products.filter(
          (products) => products._id !== i.id
        );
      }

      console.log(action.payload);
      console.log(state);
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
      })
      .addCase(deleteProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.status = "success";
        // state.products = [...state.products, action.meta.arg]
        state.products.push(action.meta.arg);
      })
      .addCase(deleteProducts.rejected, (state, action) => {
        state.status = "fail";
        console.log(state.status);
      });
  },
});

export default ProductSlice.reducer;

export const selectAllProducts = (state) => state.products.products;

const { removeProduct } = ProductSlice.actions;
