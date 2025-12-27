# Conditional Rendering in React

Sometimes you want to show different things based on some condition. Maybe show a login form if the user isn't logged in, or show an error message if something went wrong. That's conditional rendering.

## What is Conditional Rendering?

Conditional rendering means showing different UI based on a condition - could be state, props, or just a variable.

Think of it like this: "If this is true, show this. Otherwise, show something else (or nothing)."

React gives you a couple of ways to do this, and each has its place.

## Ternary Operator (condition ? A : B)

Use this when you need if/else logic - you want to show one thing OR another thing.

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

If `isLoggedIn` is true, show "Welcome!". If it's false, show "Please log in". Simple.

### Ternary with State

Here's a more realistic example with state:

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

Click the button, state changes, different text shows. Classic conditional rendering.

### Ternary Returning null

Sometimes you want to show something or nothing:

```jsx
{isAdmin ? <AdminPanel /> : null}
```

If the user is an admin, show the admin panel. If not, show nothing. The `null` means "render nothing here."

## Logical AND (&&)

Use this when you want to show something ONLY if a condition is true. If it's false, show nothing. It's simpler than ternary when you don't need an else case.

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

If `isLoggedIn` is true, show the heading. If it's false, render nothing. Clean and simple.

### Common Use Case: Show Error

This pattern is everywhere:

```jsx
{error && <p className="error">{error}</p>}
```

If there's an error, show the error message. If not, show nothing. Super useful.

### Important Gotcha with &&

Here's something that trips people up. If the left side is `0`, React will render `0`:

```jsx
// ❌ Problem
{items.length && <p>No items</p>}
```

If `items.length === 0`, the output will literally be `0` on screen. That's probably not what you want.

The fix is to make it a proper boolean:

```jsx
// ✅ Fix
{items.length > 0 && <p>Items available</p>}
```

Now it's a true/false comparison, so React will properly show or hide the element.

## When to Use What?

| Use Case | Best Option |
|----------|-------------|
| If / Else UI | Ternary (`? :`) |
| Show or hide only | Logical AND (`&&`) |
| Multiple conditions | Ternary or if-statement |
| Complex logic | `if` before return |

## Alternative: if Statement (For Complex Logic)

Sometimes conditional rendering gets messy in JSX. For complex logic, it's cleaner to use an if statement before the return:

```jsx
function App({ isLoading }) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <p>Content loaded</p>;
}
```

This is cleaner and easier to read when you have multiple conditions or complex logic. Don't feel like everything has to be inline in JSX.

## Summary

- **Ternary** → choose between two options (if/else)
- **Logical AND** → render something only when true (if, no else)
- **Avoid using `&&` with numbers directly** - use comparisons instead
- **Keep JSX readable** - sometimes an if statement is better than cramming everything inline

Conditional rendering is everywhere in React apps. Once you're comfortable with ternary and logical AND, you'll use them constantly. They're simple concepts, but super powerful.
