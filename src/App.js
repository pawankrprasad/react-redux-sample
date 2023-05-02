import React, { useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Login from './Login';
import { useState } from 'react';
import SubmitButton from './SubmitButton';

const TextToDisplay = ({text}) =>{
  console.log("TEXT TO DISPLAY RENDERED")
  return(
    <p>{text}</p>
  )
}

function App() {

  const [textToDisplay, setTextToDisplay] = useState("Initial State")

  const onSubmit = useCallback(() =>{
    console.log("Hello From SUbmit Button")
  },[])

  return (
    <div className="App">
      <SubmitButton label="Submit" onSubmit = {onSubmit}/>
      <TextToDisplay text={textToDisplay}/>
      <button onClick={()=> setTextToDisplay("Changed Text")} >Change Text </button>
      {/* <Login/>
     <Counter/> */}
    </div>
  );
}

export default App;
