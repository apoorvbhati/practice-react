import React, { Fragment, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from '../features/Task/todosSlice';

import './Todo.scss';

const Todo = ({ todo }) => {
  const [isEdting, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [task, setTask] = useState(todo.task);
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos.todos);

  const toogleHandler = (event) => {
    setIsEditing(prevState => !prevState);
  }

  const updateHandler = (event) => {
    event.preventDefault();
    setIsEditing(prevState => !prevState);
    dispatch(updateTodo({ id: todo.id, task: task }));
  }

  const deleteHandler = (event) => {
    dispatch(deleteTodo(event.target.id));
  }

  const changeHandler = (event) => {
    setTask(event.target.value);
  }

  const toggleCompleted = () => {
    setCompleted(prevState => !prevState);
  }

  return (
    <div className='task-container'>
      {isEdting ? (
        <form action="" onSubmit={updateHandler}>
          <input 
            onChange={changeHandler}
            type="text" 
            value={task}
          />
          <button>
            SAVE
          </button>
        </form>
      ) : (
        <Fragment>
          <li
            onClick={toggleCompleted}
            className={completed ? 'todo-task completed' : 'todo-task'}
          >
              {todo.task}
          </li>
          <div className='icons-container'>
              <button onClick={toogleHandler}>
                <i class="fa-solid fa-pen"></i>
              </button>
              <button onClick={deleteHandler}>
                <i id={todo.id} class="fa-solid fa-trash"></i>
              </button>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default Todo;