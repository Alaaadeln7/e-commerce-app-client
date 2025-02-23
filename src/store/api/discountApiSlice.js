import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiLink } from "../../constants/ApiLink";

export const discountApiSlice = createApi({
  reducerPath: "discountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${ApiLink}/discounts`,
    credentials: "include",
  }),
  tagTypes: ["Discount"],
  endpoints: (builder) => ({
    checkCoupon: builder.mutation({
      query: (code) => ({
        url: `/validate`,
        method: "POST",
        body: { code },
      }),
      invalidatesTags: ["Discount"],
    }),
  }),
});
export const { useCheckCouponMutation } = discountApiSlice;
