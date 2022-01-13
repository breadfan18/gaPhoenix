import { useState } from "react";

const Form = (props) => {

    const [ formState , setFormState ] = useState(null);

    const handleChange = (e) => {
      console.log(e.target.value)
      setFormState({
        [e.target.name]: e.target.value
      })
    }
    return (
        <div className="form">
            <form>
                <input type="text" onChange={handleChange}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;