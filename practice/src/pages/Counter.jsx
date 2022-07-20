import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByFive } from "../features/counter/counterSlice";

import './Counter.css';

const Counter = () => {
    const counter = useSelector(state => state.counter.counter);
    const dispatch = useDispatch();

    console.log(counter);

    return (
        <div className="container">
            <div className="content">
                <p>Counter: {counter}</p>
                <button 
                    onClick={() => dispatch(increment())}
                    aria-label="increment value"
                >
                    {/* Increment */}
                </button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementByFive())}>Increment by 5</button>
            </div>
        </div>
    );
}

export default Counter;