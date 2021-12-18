import './App.css';
import Header from './components/Header';

// Components return a part or all of the UI
// A component receives data as input and renders that data as a user interface
// Input data, Output view. 
function App() {
  return (
    //When empty jsx tags are used as wrappers, they are called 'jsx fragments'. 
    <Header />
  );
}

export default App;
