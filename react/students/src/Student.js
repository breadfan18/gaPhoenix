import Score from "./Score";

const Student = ({ student, key }) => {
    console.log(student);
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={student.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text" style={{height: "25rem"}}>{student.bio}</p>
            </div>
            <Score
                key={'score' + key}
                scores={student.scores}
            />
            <div className="card-body">
                <a href="#" className="card-link">View Student</a>
                <a href="#" className="card-link">Edit Student</a>
            </div>
        </div>
    )
}

export default Student;