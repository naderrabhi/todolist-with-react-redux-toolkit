import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../../features/todoSlice/todoSlice";
// import { addTodo } from "../../JS/action/action";
import "./addTask.css";

const AddTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({
    isDone: false,
    description: "",
  });
  return (
    <div className="add--todo">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control mx-3"
          value={newTask.description}
          type="text"
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(addTodo(newTask));
            setNewTask({ ...newTask, description: "" });
            navigate("/listtask");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
