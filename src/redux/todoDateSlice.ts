import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoDateState {
  todoDateValue: Date | undefined;
}

const initialState: TodoDateState = {
  todoDateValue: undefined,
};

const todoDateSlice = createSlice({
  name: "todoDate",
  initialState,
  reducers: {
    setTodoDateValue(state, action: PayloadAction<Date | undefined>) {
      state.todoDateValue = action.payload;
    },
  },
});

export const { setTodoDateValue } = todoDateSlice.actions;

export default todoDateSlice.reducer;