import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoDateValue: "",
};

const todoDateSlice = createSlice({
  name: "todoDate",
  initialState,
  reducers: {
    setTodoDateValie(state, action) {
      state.todoDateValue = action.payload;
    },
  },
});

export const { setTodoDateValie } = todoDateSlice.actions;

export default todoDateSlice.reducer;
