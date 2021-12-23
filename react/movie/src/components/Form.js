import { useState } from "react";

const Form = (props) => {

    const [ formState, setFormState ] = useState({
        searchTerm: ''
    })

    const handleChange = (e) => {
        setFormState({ searchTerm: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getMovie(formState.searchTerm)
    }

    return (
        <div>
            <h1>The movie API Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={formState.searchTerm} onChange={handleChange}/>
                <input type="submit" value="submit"/>
            </form>
            <hr />
        </div>
    );
};

export default Form;