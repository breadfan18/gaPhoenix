import { Link } from 'react-router-dom';


const Index = ({ people, createPeople }) => {
    const loaded = () => {
        return people.map(person => (
            <div className='person' key={person._id}>
                <Link to={`people/${person._id}`} >
                    <h1>{person.name}</h1>
                </Link>
                <img style={{height: '10rem', width: '20rem'}} src={person.image} alt={person.name} />
                <h3>{person.title}</h3>
            </div>
        ))
    }

    const loading = () => <h1>Loading...</h1>

    return people ? loaded() : loading()
}



export default Index