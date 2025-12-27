# React Events Guide

Events are how users interact with your app - clicking buttons, typing in inputs, hovering over things. React handles events a bit differently than regular HTML, so let's go through the basics.

## onClick Event

This is probably the event you'll use most. It fires when a user clicks something - a button, a div, whatever.

### Basic Example

```jsx
function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

### Important: Don't Call the Function Immediately

This is a super common mistake when you're starting out. Don't put `()` after the function name unless you wrap it in another function:

```jsx
// ❌ Wrong - this calls the function immediately
<button onClick={handleClick()}>

// ✅ Correct - this passes the function reference
<button onClick={handleClick}>
```

Why does this matter? If you use `handleClick()`, the function runs immediately when React renders the component, not when the user clicks. You want to pass the function itself, not call it.

## Passing Parameters to onClick

What if you need to pass data to your handler? Wrap it in an arrow function:

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

And if you need both parameters and the event:

```jsx
<button onClick={(e) => greet("Alice", e)}>
```

The arrow function lets you pass arguments while still letting React pass the event object.

## onChange Event

This one is mainly for form elements like `input`, `select`, and `textarea`. It fires every time the value changes.

### Basic Input Example

```jsx
function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return <input type="text" onChange={handleChange} />;
}
```

`event.target.value` gives you whatever the user typed. Super useful.

## Controlled Components (The Common Pattern)

Most of the time, you'll want React to control the input value using state. This is called a "controlled component":

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

What's happening:
- The input's `value` comes from state (`name`)
- When the user types, `onChange` fires
- We update the state with the new value
- React re-renders with the new state
- The input shows the new value

This keeps the UI and state in sync. It's the recommended approach because React has full control over the input.

## Passing Parameters in onChange

If you have multiple inputs, you can use a single handler:

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

The `name` attribute tells us which input changed, and we update just that property in the state object. The spread operator (`...form`) copies the existing state, then we override the specific field that changed.

## Inline Event Handlers

You can write event handlers inline if the logic is simple:

```jsx
<button onClick={() => console.log("Clicked!")}>
  Click
</button>
```

This is fine for simple stuff, but if your logic gets complicated, extract it to a separate function. It makes the code easier to read and test.

## Key Rules to Remember

- Use camelCase (`onClick`, not `onclick`)
- Pass a function reference, not a function call (no `()` unless it's wrapped)
- Use arrow functions to pass parameters
- Use `event.target.value` to get input values
- For forms, controlled components (using state) are usually the way to go

Events are how your app responds to users. Once you get comfortable with onClick and onChange, you can build interactive UIs that actually do something.
