import { useState } from 'react';
import './App.css';
import Counter from './Counter'

function App() {
  const [ count, setCount ] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }


  console.log(count);
  return (
    <div className="App">
      <Counter 
        count={count}
        increaseCounter={handleIncrement}
        decreaseCounter={handleDecrement}
      />
    </div>
  );
}

export default App;
