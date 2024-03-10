import * as React from 'react';
import { useState } from 'react';

function useCounter({}) {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    };
    const decrement = () => {
        setCounter(counter - 1);
    };
    return { counter, increment, decrement };
}

function Button({ children }) {
    useCounter(React.createElement(React.Fragment, null));
    return (React.createElement("button", { style: {
            padding: '10px 20px',
            fontSize: '1.2rem',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
        } }, children));
}

export { Button, useCounter };
