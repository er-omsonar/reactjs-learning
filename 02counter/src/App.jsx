import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter,setCounter] = useState(5)

  function add(){
    if(counter<10)
    setCounter(counter+1)
  }
  function sub(){
    if(counter>0)
    setCounter(counter-1)
  }
  return (
    <>
     <h1>Learning React Hooks</h1>
     <h2>Current value : {counter}</h2>
     <button onClick={add}>Add Value :{counter}</button>
     <br />
     <button onClick={sub}>Remove value :{counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
