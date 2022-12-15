import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delTodo, doneTodo } from "../../features/todoSlice/todoSlice";
// import { delTodo, doneTodo} from "../../JS/action/action";
import './task.css'

const Task = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="task--todo">
      <h1 className={todo.isDone? 'done' : ''}>{todo.description}</h1>
      <div className="task--todo--button">
      <button className="btn btn-danger" onClick={() => dispatch(delTodo(todo.id))}>Del</button>
      <button className='btn btn-success' onClick={() => dispatch(doneTodo(todo.id))}>
        {todo.isDone ? "unDone" : "Done"}
      </button>
      <button
      className="btn btn-warning"
        onClick={() => {
          navigate(`/listtask/${todo.id}`);
        }}
      >
        Edit
      </button>
      </div>
    </div>
  );
};

export default Task;
