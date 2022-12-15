import { ADD_TODO, DEL_TODO, DONE_TODO, EDIT_TODO } from "../const/const";

export const addTodo = (newTask) => {
  return {
    type: ADD_TODO,
    payload: newTask,
  };
};

export const delTodo = (id) => {
  return {
    type: DEL_TODO,
    payload: id,
  };
};

export const doneTodo = (id) => {
  return {
    type: DONE_TODO,
    payload: id,
  };
};

export const editTodo = (id, newTask) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      newTask,
    },
  };
};
