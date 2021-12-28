import Score from "./Score";

const Student = ({ student, key }) => {
    return (
        <div className="card">
            <img src={student.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text">{student.bio}</p>
            </div>
            <Score
                index={'score' + key}
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