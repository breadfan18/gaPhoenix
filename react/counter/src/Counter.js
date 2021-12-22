const Counter = ({ count, increaseCounter, decreaseCounter }) => {
    return (
        <>
            <span>Current Count: <span style={{ color: count < 0 ? 'red' : 'green'}}>{ count }</span></span>
            <section>
                <button onClick={increaseCounter}>+</button>
                <button onClick={decreaseCounter}>-</button>
            </section>
        </>
    )
}

export default Counter;