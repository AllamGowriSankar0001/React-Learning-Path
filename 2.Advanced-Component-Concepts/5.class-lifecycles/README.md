# React Class Component Lifecycles

In React class components, the lifecycle methods are hooks that let you run code at specific moments in a component's life.

Think of a component like a person:
**born → lives → changes → dies.**

Here's where `componentDidMount` and `componentDidUpdate` fit.

## 1️⃣ componentDidMount()

### When it runs:
➡️ Once, right after the component is added to the DOM (mounted).

### What it's for:

- Fetching data from an API
- Setting up subscriptions (WebSocket, event listeners)
- Initializing timers
- Direct DOM manipulation (if needed)

### Why "Did Mount"?
Because the component is now visible on the page.

```jsx
class UserProfile extends React.Component {
  componentDidMount() {
    console.log("Component mounted");
    // Example: fetch data
    // fetch('/api/user').then(...)
  }

  render() {
    return <h1>User Profile</h1>;
  }
}
```

📌 Runs only once per component lifetime.

## 2️⃣ componentDidUpdate(prevProps, prevState)

### When it runs:
➡️ After every re-render caused by props or state changes
➡️ Not on the initial render

### What it's for:

- Responding to prop changes
- Making API calls when certain data changes
- Updating the DOM after state changes

**Important:**
You must compare previous values, or you can cause infinite loops.

```jsx
class Counter extends React.Component {
  state = { count: 0 };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Count changed:", this.state.count);
    }
  }

  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        {this.state.count}
      </button>
    );
  }
}
```

🚨 **Why the check matters:**
Calling `setState` without conditions inside `componentDidUpdate` will trigger another update → infinite loop.

## 🔄 Lifecycle order (simplified)

```
constructor
render
componentDidMount   ← first time only
---
(render again)
componentDidUpdate  ← every update
```

## 🧠 Quick comparison

| Method | Runs when | Runs how often | Common use |
|--------|-----------|----------------|------------|
| `componentDidMount` | After first render | Once | Fetch data, setup |
| `componentDidUpdate` | After updates | Many times | React to changes |

## ⚠️ Modern React note

In function components, these are replaced with `useEffect`:

```jsx
useEffect(() => {
  // componentDidMount
}, []);

useEffect(() => {
  // componentDidUpdate
}, [dependency]);
```

