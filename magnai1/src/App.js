import {useState} from 'react';
import './App.css';


const App = ()=> {
const name  = 'John';
const [counter, setCounter]= useState(0);
  return (
    <div className="App">
      <button onClick={() => alert('clicked')}>-</button>
    <h1>Hello {counter} </h1>
    <button>+</button>
    </div>
  );
}

export default App;
