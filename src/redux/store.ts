import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./todosApi";
import theme from "./themeSlice";
import todoDate from "./todoDateSlice";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    theme,
    todoDate,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
