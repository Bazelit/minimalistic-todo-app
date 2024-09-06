import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66db64cff47a05d55be7e6bb.mockapi.io/",
  }),
  endpoints: (build) => ({
    getTodos: build.query({
      query: () => "todos",
    }),
    addTodo: build.mutation({
      query: (body) => ({
        url: "todos",
        method: "POST",
        body,
      }),
    }),
    updateTodo: build.mutation({
      query: (body) => ({
        url: "todos",
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation } = todosApi;
