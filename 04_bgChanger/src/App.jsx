import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    
      <div className="w-full h-screen  " style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap bg-white px-2 py-2  justify-center rounded-full bottom-12 inset-x-0 gap-3">
      <button onClick={()=>setColor('red')}
      className='outline-none px-4 rounded-full shadow-lg'  style={{backgroundColor:'red'}}>Red</button>
      <button onClick={()=>setColor('orange')} className='outline-none px-4 rounded-full shadow-lg'  style={{backgroundColor:'orange'}}>orange</button>
      <button onClick={()=>setColor('blue')} className='outline-none px-4 rounded-full shadow-lg'  style={{backgroundColor:'blue'}}>blue</button>
      <button onClick={()=>setColor('green')} className='outline-none px-4 rounded-full shadow-lg'  style={{backgroundColor:'green'}}>blue</button>
      </div>
      </div>
    
  )
}

export default App
