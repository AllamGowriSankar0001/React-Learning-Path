import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  return (
    <>
     <h1>Events</h1>
     <button onClick={()=>alert("bro you clicked me!")}>click me</button>
     <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  />
     <p>Your name is {name}</p>
    </>
  )
}

export default App
