import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApiSlice = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gymboyui.onrender.com/api/cart",
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCartItem: builder.query({
      query: () => "/",
      providesTags: ["Cart"],
    }),
    addToCart: builder.mutation({
      query: (values) => ({
        url: "/add",
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["Cart"],
    }),
    updateCart: builder.mutation({
      query: (values) => ({
        url: "/update",
        method: "PUT",
        body: values,
      }),
      invalidatesTags: ["Cart"],
    }),
    deleteCartItem: builder.mutation({
      query: (productId) => `/delete/${productId}`,
      invalidatesTags: ["Cart"],
    }),
  }),
})
export const {useGetCartItemQuery, useAddToCartMutation, useUpdateCartMutation, useDeleteCartItemMutation} = cartApiSlice