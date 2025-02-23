import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiLink } from "../../constants/ApiLink";

export const cartApiSlice = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${ApiLink}/cart`,
    credentials: "include",
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
      query: (productId) => ({
        url: `/delete/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});
export const {
  useGetCartItemQuery,
  useAddToCartMutation,
  useUpdateCartMutation,
  useDeleteCartItemMutation,
} = cartApiSlice;
