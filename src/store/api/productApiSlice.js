import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApiSlice = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gymboyui.onrender.com/api/products",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/",
      providesTags: ["Product"],
    }),
    getProduct: builder.query({
      query: (productId) => `/${productId}`,
      providesTags: ["Product"],
    }),

  }),
});
export const { useGetProductsQuery, useGetProductQuery } = productApiSlice;