const Form = ({ getGif }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        getGif();
        
    }

    return (
        <>
            <h1>Click the Button to get a Random Gif</h1>
            <form onSubmit={handleSubmit}>
                <input type="submit" value="Click Me" />
            </form>
        </>
    )
}

export default Form;