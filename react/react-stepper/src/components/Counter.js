import { useState } from "react";

const Counter = (props) => {

    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        setCount(count - 1)
    }

    return (
        <>
            <button onClick={() => handleDecrement()}>-</button>
            <h1>{count}</h1>
            <button onClick={() => handleIncrement()}>+</button>
        </>
    )
}

export default Counter;