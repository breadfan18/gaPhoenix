import { useState } from "react"

const Show = (props) => {
    const person = props.people.find(person => person._id === props.match.params.id)

    const [ editForm, setEditForm ] = useState(person);

    const handleChange = (e) => {
         setEditForm((prevState) => ({
             ...prevState,
             [e.target.name]: e.target.value
         }))   
    }

    const handleSubmit = (e) => {

    }


    return (
        <div className="personDetails">
            <h1>{person.name}</h1>
            <img src={person.image} alt={person.name} />
            <h3>{person.title}</h3>
            <form>
                <input 
                    type="text" 
                    value={editForm.name}
                    name='name'
                    placeholder="name"
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    value={editForm.image}
                    name='image'
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    value={editForm.title}
                    name='title'
                    placeholder="title"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Person" />
            </form>
        </div>

    )
}

export default Show