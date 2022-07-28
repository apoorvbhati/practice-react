import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: []
};

// {id: 1, task: 'do dishes', completed: false}

export const todosSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            let newTodo = {
                id: uuidv4(),
                task: action.payload,
                completed: false
            }
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            let id = action.payload;
            state.todos = state.todos.filter(todo => todo.id != id);
        },
        updateTodo: (state, action) => {
            let id = action.payload.id; // 5
            var toUpdatedTodo = state.todos.find(todo => todo.id === id);
            var updatedTodo = {...toUpdatedTodo, task: action.payload.task};
            state.todos = state.todos.map(todo => {
                if(todo.id === id) {
                    return updatedTodo
                }
                return todo;
            })
        }
    }
})

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;