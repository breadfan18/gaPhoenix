const Show = (props) => {
    const thisPerson = props.people.find(person => person._id === props.match.params.id)
    console.log(thisPerson)
    return (
        <div className="personDetails">
            <h1>{thisPerson.name}</h1>
            <img src={thisPerson.image} alt={thisPerson.name} />
            <h3>{thisPerson.title}</h3>
        </div>

    )
}

export default Show