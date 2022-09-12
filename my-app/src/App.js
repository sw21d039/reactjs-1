import logo from './logo.svg';
import {useEffect, useState} from 'react';
import './App.css';

const App=()=> {
  const[counter,setCounter]=useState(0);
  useEffect(()=>{
   alert('ddgdgd ' +counter)
  },[])

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCont)=>prevCont-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCont)=>prevCont+1)}>+</button>
      
    </div>
  );
}

export default App;
