import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import { authApiSlice } from "./api/authApiSlice";
import { productApiSlice } from "./api/productApiSlice";
import { notificationApiSlice } from "./api/notificationApiSlice";
import { cartApiSlice } from "./api/cartApiSlice";
import { discountApiSlice } from "./api/discountApiSlice";
import { reviewApiSlice } from "./api/reviewsApiSlice";
import { orderApiSlice } from "./api/orderApiSlice";
const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    [notificationApiSlice.reducerPath]: notificationApiSlice.reducer,
    [cartApiSlice.reducerPath]: cartApiSlice.reducer,
    [discountApiSlice.reducerPath]: discountApiSlice.reducer,
    [reviewApiSlice.reducerPath]: reviewApiSlice.reducer,
    [orderApiSlice.reducerPath]: orderApiSlice.reducer,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      productApiSlice.middleware,
      notificationApiSlice.middleware,
      cartApiSlice.middleware,
      discountApiSlice.middleware,
      reviewApiSlice.middleware,
      orderApiSlice.middleware
    ),
});

export default store;
