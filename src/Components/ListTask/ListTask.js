import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";

const ListTask = () => {
  const todoList = useSelector((state) => state.todoReducer.todoList);
  return (
    <div>
      {todoList.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTask;
