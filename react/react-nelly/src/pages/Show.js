import { useState } from "react"

const Show = (props) => {
    const person = props.people.find(person => person._id === props.match.params.id)

    return (
        <div className="personDetails">
            <h1>{person.name}</h1>
            <img src={person.image} alt={person.name} />
            <h3>{person.title}</h3>
        </div>

    )
}

export default Show