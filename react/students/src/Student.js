const Student = ({student}) => {
    return(
        <>
            <h2>{student.name}</h2>
            <p>{student.bio}</p>
        </>
    )
}

export default Student;