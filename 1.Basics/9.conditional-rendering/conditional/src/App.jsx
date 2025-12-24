import { useState } from 'react'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = ()=>{
    setIsLoggedIn(!isLoggedIn);
  }
  let message;
  if (isLoggedIn) {
    message = <h1>Welcome back!</h1>;
  } else {
    message = <h1>Please login</h1>;
  }

  return (
    <>
      <h1>Conditional Rendering</h1>
      {/* basic if else statement */}
      {message}
      {/* ternary operator */}
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please login</h1>}
      {/* logical and operator */}
      {isLoggedIn && <h1>Welcome back!</h1>}
      {/* logical or operator */}
      {isLoggedIn || <h1>Please login</h1>}
      {/* logical not operator */}
      {!isLoggedIn && <h1>Please login</h1>}
      {/* logical not operator */}
      <button onClick={handleLogin}>login</button>
    </>
  );
}

export default App;
