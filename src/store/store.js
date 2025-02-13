import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import { authApiSlice } from "./api/authApiSlice";
import { productApiSlice } from "./api/productApiSlice";
const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      productApiSlice.middleware
    ),
});

export default store;
