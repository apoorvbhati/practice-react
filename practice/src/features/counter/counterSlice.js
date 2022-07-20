import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        },
        incrementByFive: (state) => {
            state.counter = state.counter + 5;
        }
    }
});

export const { increment, decrement, incrementByFive } = counterSlice.actions;

export default counterSlice;