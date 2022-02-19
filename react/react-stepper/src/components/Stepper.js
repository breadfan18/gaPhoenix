const Stepper = (props) => {
    return (
        <button onClick={() => props.handleClick()}>{props.upOrDown}</button>
    )
}

export default Stepper;