import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiLink } from "../../constants/ApiLink";
export const orderApiSlice = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${ApiLink}/orders`,
    credentials: "include",
  }),
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (values) => ({
        url: "/",
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["Order"],
    }),
    getUserOrders: builder.query({
      query: () => "/",
      providesTags: ["Order"],
    }),
  }),
})

export const { useCreateOrderMutation, useGetUserOrdersQuery } = orderApiSlice