const Counter = ({ count, increaseCounter, decreaseCounter }) => {
    return (
        <>
            <span>Current Count: { count }</span>
            <section>
                <button onClick={increaseCounter}>+</button>
                <button onClick={decreaseCounter}>-</button>
            </section>
        </>
    )
}

export default Counter;