import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate, useParams } from 'react-router-dom'
import { editTodo } from '../../features/todoSlice/todoSlice'
// import { editTodo } from '../../JS/action/action'
import './edit.css'

const Edit = () => {
    const {id} = useParams()
    const [newTask, setNewTask] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()
  return (
    <div className='edit--todo'>
        <input className='form-control mx-3' type="text" onChange={e=> setNewTask(e.target.value)}/>
        <button className='btn btn-primary' onClick={()=>{dispatch(editTodo({id,newTask}));navigate('/listtask')}} >Save</button>
    </div>
  )
}

export default Edit