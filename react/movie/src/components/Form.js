import { useState } from "react";

const Form = (props) => {

    const [ formState, setFormState ] = useState({
        searchTerm: ''
    })

    const handleChange = (event) => {
        console.log(event.target.value)

        setFormState({ searchTerm: event.target.value })
    }

    const handleClick = () => {
        console.log(formState.searchTerm)
    }

    return (
        <div>
            <h1>The movie API Form</h1>
            <form>
                <input type="text" value={formState.searchTerm} onChange={handleChange}/>
                <input type="submit" value="submit" onClick={handleClick}/>
            </form>
            <hr />
        </div>
    );
};

export default Form;