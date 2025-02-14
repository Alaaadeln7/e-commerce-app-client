import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notificationApiSlice = createApi({
  reducerPath: "notificationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gymboyui.onrender.com/api/notifications",
  }),
  tagTypes: ["Notification"],
  endpoints: (builder) => ({
    getNotification: builder.query({
      query: () => "/",
      providesTags: ["Notification"],
    }),
    makeNotificationRead: builder.mutation({
      query: (notificationId) => ({
        url: "/markAsRead",
        method: "POST",
        body: { notificationId },
      }),
      invalidatesTags: ["Notification"],
    }),
  }),
})
export const { useGetNotificationQuery , useMakeNotificationReadMutation } = notificationApiSlice