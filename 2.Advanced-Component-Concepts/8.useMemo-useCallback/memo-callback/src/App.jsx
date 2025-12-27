import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Memo from './memo'
import CallBack from './callback'

function App() {
  const [count, setCount] = useState("allam")

  return (
    <>
     <Memo/>
     <CallBack variable={count} />
    </>
  )
}

export default App
