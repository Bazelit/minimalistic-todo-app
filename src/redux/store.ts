import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./todosApi";
import theme from "./themeSlice";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    theme,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
