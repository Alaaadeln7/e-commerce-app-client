import { ApiLink } from "../../constants/ApiLink";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApiSlice = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${ApiLink}/products`,
    credentials: "include",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/`,
      providesTags: ["Product"],
    }),
    getProduct: builder.query({
      query: (productId) => `/${productId}`,
      providesTags: ["Product"],
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/addProduct",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApiSlice;
