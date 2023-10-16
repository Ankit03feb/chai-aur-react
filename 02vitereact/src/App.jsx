import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 let [counter,setcounter] = useState(5)



  const addvalue = () =>{
   counter = counter + 1
   setcounter(counter);
  }

  const removevalue = () =>{
    counter = counter - 1
    setcounter(counter);
   }

  return (
    <>
      <h1>project 1</h1>
      <h2>Counter valur :{counter}</h2>
      <br/>
      <button onClick = {addvalue}>Add value</button>
      <button onClick = {removevalue}>remove value</button>
    </>
  )
}

export default App
