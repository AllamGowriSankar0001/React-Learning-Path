import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <h1>Counter: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      
    </>
  )
}

export default App;
