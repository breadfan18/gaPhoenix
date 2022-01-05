import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState({
    skills: [],
    skill: "",
    level: '3'
  });

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function getData() {
    const response = await fetch('https://soup-skills-api.herokuapp.com/api/skills');
    const data = await response.json()

    setState({
      skills: data,
      skill: '',
      level: '3'
    })
    
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newSkill = {
      skill: state.skill, 
      level: state.level
    };

    await fetch('https://soup-skills-api.herokuapp.com/api/skills/addSkill', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(newSkill)
    })

    getData();
    
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <section>
      <h2>DEV SKILLS</h2>
      <hr />
      {state.skills.map((s) => (
        <article key={s.skill}>
          <div>{s.skill}</div> <div>{s.level}</div>
        </article>
      ))}
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          <span>SKILL</span>
          <input name="skill" value={state.skill} onChange={handleChange}/>
        </label>
        <label>
          <span>LEVEL</span>
          <select name="level" value={state.level} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button>ADD SKILL</button>
      </form>
    </section>
  );
}
