import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoDateState {
  todoDateValue: Date | null;
}

const initialState: TodoDateState = {
  todoDateValue: null,
};

const todoDateSlice = createSlice({
  name: "todoDate",
  initialState,
  reducers: {
    setTodoDateValue(state, action: PayloadAction<Date | null>) {
      state.todoDateValue = action.payload;
    },
  },
});

export const { setTodoDateValue } = todoDateSlice.actions;

export default todoDateSlice.reducer;