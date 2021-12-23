const GifDisplay = ({ gif }) => {
    return (
        <>
            <h1>Random Gif Below</h1>
            <img src={ gif } alt='test' />
        </>
    )
}

export default GifDisplay;