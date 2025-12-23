# React Components Guide

This README explains the core concept of React components, covering functional and class components, and how to use them effectively.

---

## 1️⃣ What is a Component?

* A **component** is a **reusable piece of UI**.
* Think of it as a function or class that **returns JSX**.
* Components let you **break your app into modular, maintainable pieces**.

**Example components:**

* Header
* Footer
* ProfileCard
* TodoItem

---

## 2️⃣ Functional Components

* **Modern React recommends functional components**.
* A **JavaScript function that returns JSX**.

```jsx
function Header() {
  return <h1>Welcome to My App</h1>;
}
```

Or using arrow function:

```jsx
const Header = () => <h1>Welcome to My App</h1>;
```

**Key points:**

* Can use **props**:

```jsx
const Header = ({ title }) => <h1>{title}</h1>;
<Header title="Hello World!" />
```

* Can use **state & lifecycle** via hooks (`useState`, `useEffect`)
* Simpler, less boilerplate

---

## 3️⃣ Class Components

* **Older way** of writing React components.
* A **JavaScript class that extends `React.Component`**.

```jsx
import React from "react";

class Header extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
```

**Key points:**

* Uses `this.props` to access props
* Uses `this.state` to manage local state
* Lifecycle methods available: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`
* More boilerplate, less commonly used in modern React
* Typically used in **legacy code**, which means older projects or codebases that were built before functional components and hooks became standard.

---

## 4️⃣ Functional vs Class — Quick Comparison

| Feature     | Functional                  | Class                                     |
| ----------- | --------------------------- | ----------------------------------------- |
| Syntax      | `function` / arrow function | `class` extends `React.Component`         |
| State       | `useState` hook             | `this.state` & `this.setState()`          |
| Lifecycle   | `useEffect` hook            | `componentDidMount`, `componentDidUpdate` |
| Props       | Direct in parameters        | `this.props`                              |
| Boilerplate | Minimal                     | More verbose                              |
| Recommended | ✅ Modern React              | ❌ Legacy, for older projects              |

*the States,props,all the other topics will learn later

---

## 5️⃣ Example: Functional vs Class

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

✅ **Takeaway:**

* Use **functional components** almost always.
* **Class components** are mainly for **legacy code**, which refers to older projects or existing codebases that were written before functional components and hooks became the standard in React.
