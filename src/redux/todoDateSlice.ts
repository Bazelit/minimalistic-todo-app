import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoDateValue: "",
};

const todoDateSlice = createSlice({
  name: "todoDate",
  initialState,
  reducers: {
    setTodoDateValue(state, action) {
      state.todoDateValue = action.payload;
    },
  },
});

export const { setTodoDateValue } = todoDateSlice.actions;

export default todoDateSlice.reducer;
