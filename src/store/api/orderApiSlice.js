import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiLink } from "../../constants/ApiLink";
export const orderApiSlice = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${ApiLink}/`,
    credentials: "include",
  }),
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (values) => ({
        url: "/orders/",
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["Order"],
    }),
    getUserOrders: builder.query({
      query: () => "/orders/",
      providesTags: ["Order"],
    }),
    createCheckoutSession: builder.mutation({
      query: ({ orderId }) => ({
        url: "/payments/create-checkout-session",
        method: "POST",
        body: orderId,
      }),
    }),
    paymentSuccessHandel: builder.mutation({
      query: ({ orderId }) => ({
        url: "/payments/payment-success",
        method: "POST",
        body: orderId,
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetUserOrdersQuery,
  useCreateCheckoutSessionMutation,
  usePaymentSuccessHandelMutation,
} = orderApiSlice;
