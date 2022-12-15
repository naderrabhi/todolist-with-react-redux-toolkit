import { ADD_TODO, DEL_TODO, DONE_TODO, EDIT_TODO } from "../const/const";
import { v4 as uuidv4 } from "uuid";

const initialState = { todoList: [] };

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { todoList: [...state.todoList, { ...payload, id: uuidv4() }] };
    case DEL_TODO:
      return { todoList: state.todoList.filter((el) => el.id !== payload) };
    case DONE_TODO:
      return {
        todoList: state.todoList.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case EDIT_TODO:
      return {
        todoList: state.todoList.map((el) =>
          el.id === payload.id ? { ...el, description: payload.newTask } : el
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
