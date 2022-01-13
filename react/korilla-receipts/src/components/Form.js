import { useState } from "react";

const Form = ({ handleSearch }) => {

    const [ formState , setFormState ] = useState(null);

    const handleChange = (e) => {
      console.log(e.target.value)
      setFormState({
        [e.target.name]: e.target.value
      })

      handleSearch(e.target.value)
    }

    return (
        <div className="form">
            <form>
                <input 
                  type="text" 
                  name="term" 
                  onChange={handleChange}
                  placeholder="Search a name.."
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;