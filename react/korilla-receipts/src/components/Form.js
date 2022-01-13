import { useState } from "react";

const Form = ({ handleSearch, handleFilter }) => {

  const [formState, setFormState] = useState(null);

  const handleChange = (e) => {
    setFormState({
      [e.target.name]: e.target.value
    })

    handleSearch(e.target.value)
  }

  return (
    <div className="form">

      <input
        type="text"
        name="term"
        onChange={handleChange}
        placeholder="Search a name.."
      />
      <div className="filter">
        <input type="submit" value="Paid" onClick={() => handleFilter(true)}/>
        <input type="submit" value="Not Paid" onClick={() => handleFilter(false)}/>
        <input type="submit" value="All" onClick={() => handleFilter(null)}/>
      </div>
    </div>
  )
}

export default Form;