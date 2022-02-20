const Form = ({ getGif }) => {
    const handleClick = () => {
        getGif()
    }
    return (
        <form onSubmit={() => handleClick()} style={{marginBottom: '20px'}}>
            <input type="submit" value='Shuffle' />
        </form>
    )
}
    

        

export default Form