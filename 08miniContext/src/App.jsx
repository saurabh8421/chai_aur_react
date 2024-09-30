import { useState } from 'react'
import './App.css'
import UserContextprovider from './context/UserContextprovider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextprovider>
     <h1>React with Chai and share is important</h1>
     <Login/>
     <Profile/>
    </UserContextprovider>
  )
}

export default App
