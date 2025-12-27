# React Components Guide

Components are the building blocks of React. Once you understand components, you understand React. It's that important.

## What is a Component?

A component is basically a reusable piece of UI. It's a function (or class) that returns JSX. Instead of writing one huge page with everything in it, you break it down into smaller, manageable pieces.

Think about a website - you might have a Header component, a Footer component, a ProfileCard component, a TodoItem component. Each one does its own thing, and you can reuse them.

## Functional Components (The Modern Way)

This is what everyone uses now. A functional component is just a JavaScript function that returns JSX:

```jsx
function Header() {
  return <h1>Welcome to My App</h1>;
}
```

Or using an arrow function:

```jsx
const Header = () => <h1>Welcome to My App</h1>;
```

**Key things about functional components:**
- They can use props to receive data
- They can use state and lifecycle via hooks (like `useState`, `useEffect`)
- They're simpler and have less boilerplate than class components
- This is what you should use for new code

Here's one with props:

```jsx
const Header = ({ title }) => <h1>{title}</h1>;
<Header title="Hello World!" />
```

We'll talk more about props later, but the idea is you can pass data into components.

## Class Components (The Old Way)

Before hooks existed, React used class components. They look like this:

```jsx
import React from "react";

class Header extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
```

**Key things about class components:**
- They use `this.props` to access props
- They use `this.state` to manage local state
- They have lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc.
- They have more boilerplate (more code to write)
- You'll mainly see these in legacy code (older projects)

Honestly, unless you're working with old code, you probably don't need to learn class components. Functional components can do everything they can do, and they're simpler.

## Functional vs Class - Quick Comparison

| Feature     | Functional                  | Class                                     |
| ----------- | --------------------------- | ----------------------------------------- |
| Syntax      | `function` / arrow function | `class` extends `React.Component`         |
| State       | `useState` hook             | `this.state` & `this.setState()`          |
| Lifecycle   | `useEffect` hook            | `componentDidMount`, `componentDidUpdate` |
| Props       | Direct in parameters        | `this.props`                              |
| Boilerplate | Minimal                     | More verbose                              |
| Recommended | ✅ Modern React              | ❌ Legacy, for older projects              |

## Example: Same Component, Different Styles

Here's a counter component written both ways so you can see the difference:

**Functional Component:**

```jsx
const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

**Class Component:**

```jsx
class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

See how much simpler the functional version is? Less code, easier to read, same functionality.

**My takeaway:** Use functional components. They're simpler, cleaner, and they're what modern React is all about. You'll learn about states, props, and everything else as you go - but start with functional components.
