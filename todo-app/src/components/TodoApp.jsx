import React from 'react';

import Todos from './Todos';
import NewTodoForm from './NewTodoForm';

import './TodoApp.scss';

const TodoApp = () => {
  return (
    <div className='parent-container'>
        <div className='child-container'>
            <div className='header-container'>
                <h3>Todo List</h3>
                <p>A simple React todo list App</p>
            </div>
            <Todos />
            <NewTodoForm />
        </div>
    </div>
  )
}

export default TodoApp;