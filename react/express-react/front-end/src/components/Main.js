import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

const Main = (props) => {
    const [ people, setPeople ] = useState(null);
    const URL = 'https://express-react-back-end.herokuapp.com/people';

    const getPeople = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPeople(data);
    }

    const createPeople = async(person) => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(person)
        })
        getPeople();
    }

    const updatePerson = async (person, id) => {
        console.log(`${URL}/${id}`);

        await fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(person)
        })

        getPeople();
    }

    const deletePerson = async (id) => {
        await fetch(`${URL}/${id}`, {
            method: 'DELETE'
        })

        getPeople();
    }

    useEffect(() => getPeople(), [])

    return (
        <main>
            <Switch>
                <Route exact path='/people'>
                    <Index 
                        people={people}
                        createPeople={createPeople}
                    />
                </Route>    
                <Route path="/people/:id" render={(rp) => (
                    <Show 
                        {...rp}
                        people={people} 
                        updatePerson={updatePerson}
                        deletePerson={deletePerson}
                    />)} />
        </Switch>
        </main>
    )
}

export default Main