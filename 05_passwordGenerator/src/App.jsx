import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)

  const [Password,setPassword] = useState("")

const passwordGenerator = useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberAllowed) str+="1234567890"
  if(charAllowed) str+="!@#$%^&*(){}"

  for (let index = 1; index < length; index++) {
    let char = Math.floor(Math.random()*str.length+1)
    pass+= str.charAt(char)
  }
  setPassword(pass)

},[length,numberAllowed,charAllowed,Password])

useEffect(()=>{passwordGenerator()},[setPassword,length,charAllowed,numberAllowed])


//useRef hook

const passwordRef = useRef(null)

const copyPasswordToClipboard  = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,99)
  window.navigator.clipboard.writeText(Password)
  // .then(()=>{alert('copied')})
},[Password])

  return (
    <>
     <h1 className='text-4xl text-center mb-9 mt-8'>Password Generator </h1>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 text-orange-500 text-center bg-gray-800">
      
      <div className="flex shadow-md rounded-lg overflow-hidden mb-4">

      <input type="text"
      value={Password}
      className='outline-none w-full py-2 px-3'
      placeholder='password'
      ref={passwordRef}
      readOnly
      />
    <button className='outline-none bg-blue-700 text-white px3 py-0.5 shrink-0 active:bg-blue-400'
    onClick={copyPasswordToClipboard}
    >
      Copy
    </button>
      </div>
      <div className="flex items-center gap-x-1 text-sm">
        <input type="range" name="" id="" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)}/>
        <label htmlFor="">length: {length}</label>
        <input type="checkbox" name=""  className='cursor-pointer' onChange={()=>setnumberAllowed((prev)=>!prev)}/>
        <label htmlFor="">number</label>
        <input type="checkbox" name=""  className='cursor-pointer' onChange={()=>{setcharAllowed((prev)=>!prev)}}/>
        <label htmlFor="">character</label>
      </div>
     </div>

    </>
  )
}

export default App
