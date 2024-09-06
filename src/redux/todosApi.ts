import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}
type TodosResponse = Todo[];

export const todosApi = createApi({
  reducerPath: "todosApi",
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66db64cff47a05d55be7e6bb.mockapi.io/",
  }),
  endpoints: (build) => ({
    getTodos: build.query<TodosResponse, void>({
      query: () => "todos",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todos" as const, id })),
              { type: "Todos", id: "LIST" },
            ]
          : [{ type: "Todos", id: "LIST" }],
    }),
    addTodo: build.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: "todos",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
    updateTodo: build.mutation<Todo, Partial<Todo>>({
      query: ({ id, ...patch }) => ({
        url: `todos/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation } =
  todosApi;
