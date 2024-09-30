import { useState } from 'react'
import './App.css'

function App() {
  let [ counter , setCounter] =useState(15)

  const addValue =  ()=>{
  if(counter<20){
    counter+=1}
    setCounter(counter)
    console.log(counter)
  }
  const removeValue=()=>{
    if(counter>=1){
      counter-=1
    }
    setCounter(counter)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter: {counter}</h2>
      <button type="button" onClick={addValue}>Add Value</button>
      <button type="button" onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
