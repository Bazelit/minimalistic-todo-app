import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {TypeTodo} from "@/types/todoType";

type TodosResponse = TypeTodo[];

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
            ...result.map(({id}) => ({type: "Todos" as const, id})),
            {type: "Todos", id: "LIST"},
          ]
          : [{type: "Todos", id: "LIST"}],
    }),
    addTodo: build.mutation({
      query: (body) => ({
        url: "todos",
        method: "POST",
        body,
      }),
      invalidatesTags: [{type: "Todos", id: "LIST"}],
    }),
    updateTodo: build.mutation({
      query: ({id, ...updatedData}) => ({
        url: `todos/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: [{type: "Todos", id: "LIST"}],
    }),
    deleteTodo: build.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{type: "Todos", id: "LIST"}],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
