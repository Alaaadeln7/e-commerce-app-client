import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiLink } from "../../constants/ApiLink";

export const reviewApiSlice = createApi({
  reducerPath: "reviewApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: `${ApiLink}/reviews`,
    credentials: "include",
  }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (productId) => `/${productId}`,
      providesTags: ["Reviews"],
    }),
    addReview: builder.mutation({
      query: (newReview) => ({
        url: "/addReview",
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: ["Reviews"],
    }),
  }),
});

export const { useGetReviewsQuery, useAddReviewMutation } = reviewApiSlice;
