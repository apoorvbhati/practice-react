import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/Task/todosSlice';

import './NewTodoForm.scss';

const NewTodoForm = () => {
    const [task ,setTask] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);

    const clickHandler = () => {
        dispatch(addTodo(task));
        setTask('');
    }

    const changeHandler = (event) => {
        setTask(event.target.value);
    }
    // console.log(task);
    // console.log('todos: ' + todos);

    return (
        <div className='form-container'>
            <form action="">
                <label htmlFor='todoForm'>New Todo</label>
                <input 
                    type='text' 
                    placeholder='New Todo' 
                    onChange={changeHandler}
                    value={task}
                />
                <button type='button' onClick={clickHandler}>
                    ADD TODO
                </button>
            </form>
        </div>
  )
}

export default NewTodoForm;