import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import { authApiSlice } from "./api/authApiSlice";
import { productApiSlice } from "./api/productApiSlice";
import { notificationApiSlice } from "./api/notificationApiSlice";
import { cartApiSlice } from "./api/cartApiSlice";
import { discountApiSlice } from "./api/discountApiSlice";
const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    [notificationApiSlice.reducerPath]: notificationApiSlice.reducer,
    [cartApiSlice.reducerPath]: cartApiSlice.reducer,
    [discountApiSlice.reducerPath]: discountApiSlice.reducer,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      productApiSlice.middleware,
      notificationApiSlice.middleware,
      cartApiSlice.middleware,
      discountApiSlice.middleware
    ),
});

export default store;
