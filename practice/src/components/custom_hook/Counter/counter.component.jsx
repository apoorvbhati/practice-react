import React, { useState } from "react";

import { useCounter } from "./useCounter";

const Counter = () => {
    const {counter, increment, decrement} = useCounter(0);

    return (
        <React.Fragment>
            <div>
                {counter}        
            </div>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </React.Fragment>
    );
}

export default Counter;