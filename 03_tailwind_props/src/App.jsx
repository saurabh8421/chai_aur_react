import { useState } from 'react'
import './App.css'
import { CardOne } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-red-500 p-6 rounded-xl font-bold underline mb-4'>tailwind test</h1>
     <CardOne username="Saurabh"/>
     <CardOne username="hitesh" btnText="Click Here"/>
    </>
  )
}

export default App
