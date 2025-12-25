# React Class Component Lifecycles

Before hooks came along, if you wanted to do something when a component mounted or updated, you used lifecycle methods in class components. Even though most people use function components with hooks now, it's still useful to understand these concepts since they map directly to useEffect patterns.

Think of a component's lifecycle like a person's life: it's born (mounted), lives (updates), and eventually dies (unmounts). Lifecycle methods let you hook into these moments.

## componentDidMount

This method runs once, right after the component is first rendered and added to the DOM. It's called "Did Mount" because at this point, the component is now mounted and visible on the page.

Here's what you'd typically use it for:
- Fetching data from an API
- Setting up subscriptions (like WebSockets or event listeners)
- Starting timers
- Direct DOM manipulation (though this is rare in React)

Here's a simple example:

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

This runs exactly once per component's lifetime - right after the first render.

## componentDidUpdate

This one runs after every re-render, but NOT on the initial render. It gets called with the previous props and previous state as arguments, which is super important.

Here's what it's useful for:
- Reacting to prop changes
- Making API calls when certain data changes
- Updating the DOM after state changes

But here's the critical thing - you MUST compare previous values, otherwise you can create infinite loops:

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

See that `if` statement? That's crucial. If you call `setState` inside `componentDidUpdate` without checking if something actually changed, you'll trigger another update, which calls `componentDidUpdate` again, which calls `setState` again... and you've got yourself an infinite loop.

## The lifecycle order

Here's the simplified flow:

```
constructor
render
componentDidMount   ← first time only
---
(render again)
componentDidUpdate  ← every update
```

## Quick comparison

| Method | Runs when | Runs how often | Common use |
|--------|-----------|----------------|------------|
| componentDidMount | After first render | Once | Fetch data, setup |
| componentDidUpdate | After updates | Many times | React to changes |

## The modern equivalent

In function components, these are replaced with useEffect:

```jsx
// componentDidMount
useEffect(() => {
  // code here
}, []);

// componentDidUpdate (for specific value)
useEffect(() => {
  // code here
}, [dependency]);
```

The empty array `[]` is like componentDidMount - runs once. The array with dependencies is like componentDidUpdate but more specific - it only runs when those specific dependencies change.
