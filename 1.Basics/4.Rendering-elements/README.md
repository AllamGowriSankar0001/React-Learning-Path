# React Rendering Guide

This README explains how React elements are rendered to the browser DOM using the modern `createRoot` method with `StrictMode`.

---

## 1️⃣ What is Rendering in React?

* Rendering means **taking a React element (JSX) and displaying it in the browser DOM**.
* React needs a **root DOM node** to attach your JSX to.

---

## 2️⃣ Using createRoot with StrictMode

* Modern React (18+) uses `createRoot` to render elements.
* Example:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**Explanation:**

1. `document.getElementById('root')` → selects the DOM element where React will render.
2. `createRoot(...)` → creates a React root.
3. `.render(<StrictMode><App /></StrictMode>)` → renders the JSX into the DOM.
4. `StrictMode` helps detect potential problems in your app during development.

---

## 3️⃣ Example: Rendering Custom JSX inside App

```jsx
function App() {
  return (
    <>
      <h1>Hello, Alice!</h1>
      <p>Welcome to React!</p>
      <img src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" alt="Example Image" />
    </>
  );
}

export default App;
```

**Explanation:**

* You can render any JSX inside your `App` component.
* React efficiently updates only parts of the DOM that change, thanks to the Virtual DOM.

---

## 4️⃣ Key Points

* Always have a **single root div** in your HTML (`<div id="root"></div>`).
* `createRoot(...).render(...)` = **entry point for React apps**.
* `StrictMode` helps with detecting potential issues during development.
* All JSX and components are rendered **inside this root**.

---

💡 **Tip:**

* You can render multiple elements using fragments or wrapping divs inside `App`:

```jsx
function App() {
  return (
    <>
      <h1>Heading</h1>
      <p>Paragraph</p>
      <img src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" alt="Example Image" />
    </>
  );
}
```


