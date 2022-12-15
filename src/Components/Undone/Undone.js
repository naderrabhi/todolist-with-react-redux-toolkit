import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";

const Undone = () => {
  const unDoneList = useSelector((state) =>
  state.todoReducer.todoList.filter((todo) => !todo.isDone)
  );
  return (
    <div>
      {unDoneList.map((todo) => (
        <Task todo={todo} />
      ))}
    </div>
  );
};

export default Undone;
