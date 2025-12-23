# React Events Guide

A comprehensive guide to handling events in React, focusing on `onClick`, `onChange`, and passing parameters.

---

## 1. onClick Event

Used when a user clicks a button, div, etc.

### Basic Example

```jsx
function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

### 🔹 Important:

**Do not call the function with `()` inside JSX unless you wrap it in another function.**

#### ❌ Wrong

```jsx
<button onClick={handleClick()}>
```

#### ✅ Correct

```jsx
<button onClick={handleClick}>
```

---

## 2. Passing Parameters to onClick

To pass arguments, wrap the function in an arrow function.

```jsx
function App() {
  const greet = (name) => {
    alert(`Hello ${name}`);
  };

  return (
    <button onClick={() => greet("Alice")}>
      Greet
    </button>
  );
}
```

### Passing both params and event

```jsx
<button onClick={(e) => greet("Alice", e)}>
```

---

## 3. onChange Event

Used mainly with form elements (`input`, `select`, `textarea`).

### Basic Input Example

```jsx
function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return <input type="text" onChange={handleChange} />;
}
```

### 🔹 `event.target.value` gives the current input value.

---

## 4. Controlled Component (Most Common Pattern)

React controls the input value using state.

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

- ✔ Keeps UI and state in sync
- ✔ Recommended approach

---

## 5. Passing Parameters in onChange

Example with multiple inputs:

```jsx
function App() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <input name="email" onChange={handleChange} />
      <input name="password" onChange={handleChange} />
    </>
  );
}
```

---

## 6. Inline Event Handlers (Quick Use)

```jsx
<button onClick={() => console.log("Clicked!")}>
  Click
</button>
```

Good for simple logic, but avoid heavy code inline.

---

## Key Rules to Remember

- ✅ Use camelCase (`onClick`, not `onclick`)
- ✅ Pass a function reference, not a function call
- ✅ Use arrow functions to pass parameters
- ✅ Use `event.target.value` for inputs

