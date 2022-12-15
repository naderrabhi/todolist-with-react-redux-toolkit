import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = { todoList: [] };

export const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todoList.push({ ...payload, id: uuidv4() });
    },
    delTodo: (state, { payload }) => {
        state.todoList=state.todoList.filter((el) => el.id !== payload);
    },
    doneTodo: (state, { payload }) => {
        state.todoList=state.todoList.map((el) =>
        el.id === payload ? { ...el, isDone: !el.isDone } : el
      );
    },
    editTodo: (state, {payload}) => {
        state.todoList=state.todoList.map((el) =>
        el.id === payload.id ? { ...el, description: payload.newTask } : el
      );
    },
  },
});

export const { addTodo, delTodo, doneTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
