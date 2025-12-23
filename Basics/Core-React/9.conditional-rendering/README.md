# Conditional Rendering in React

A comprehensive guide to conditional rendering in React, focusing on ternary operator (`? :`) and logical AND (`&&`).

---

## What is Conditional Rendering?

Conditional rendering means showing different UI based on a condition (state, props, variables).

**Think of it as:**

> "If this is true → show this, otherwise → show something else or nothing."

---

## 1. Ternary Operator (`condition ? A : B`)

Use when you need **if / else** logic.

### Basic Syntax

```jsx
condition ? <ComponentA /> : <ComponentB />
```

### Example: Login Status

```jsx
function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <h1>Welcome!</h1> : <h1>Please log in</h1>}
    </div>
  );
}
```

- ✔ Shows one of two elements

### Ternary with State

```jsx
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle
      </button>

      {darkMode ? <p>Dark Mode ON</p> : <p>Light Mode</p>}
    </>
  );
}
```

### Ternary Returning null

```jsx
{isAdmin ? <AdminPanel /> : null}
```

Used when you want nothing rendered in the else case.

---

## 2. Logical AND (`&&`)

Use when you want to render something **only if condition is true**.

### Basic Syntax

```jsx
condition && <Component />
```

### Example

```jsx
function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn && <h1>Dashboard</h1>}
    </div>
  );
}
```

- ✔ Renders `<h1>` only if `isLoggedIn` is true
- ✔ If false → renders nothing

### Common Use Case: Show Error

```jsx
{error && <p className="error">{error}</p>}
```

If error exists → message appears.

### ⚠ Important Gotcha with `&&`

**If the left side is `0`, React will render `0`.**

#### ❌ Problem

```jsx
{items.length && <p>No items</p>}
```

If `items.length === 0`, output will be `0`.

#### ✅ Fix

```jsx
{items.length > 0 && <p>Items available</p>}
```

---

## 3. When to Use What?

| Use Case | Best Option |
|----------|-------------|
| If / Else UI | Ternary (`? :`) |
| Show or hide only | Logical AND (`&&`) |
| Multiple conditions | Ternary or if-statement |
| Complex logic | `if` before return |

---

## 4. Alternative: if Statement (Complex Logic)

```jsx
function App({ isLoading }) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <p>Content loaded</p>;
}
```

- ✔ Cleaner for complex conditions
- ✔ Easier to read

---

## Summary

- **Ternary** → choose between two options
- **Logical AND** → render something only when true
- **Avoid using `&&` with numbers directly**
- **Keep JSX readable**

