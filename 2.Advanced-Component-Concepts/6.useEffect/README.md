# useEffect Hook

useEffect is probably the hook you'll use most after useState. It's how you handle side effects in function components - things like fetching data, setting up subscriptions, or directly manipulating the DOM.

Here's the basic syntax:

```jsx
useEffect(() => {
  // effect code
});
```

But there's a crucial part that controls when this code runs - the dependency array. This is where most people get confused at first.

## The dependency array

The dependency array tells React "when should I run this effect?" and there are three scenarios:

### No dependency array (runs every render)

```jsx
useEffect(() => {
  console.log("runs every render");
});
```

This runs on the first render AND every single re-render. You almost never want this - it's a common source of bugs and performance issues.

### Empty dependency array (runs once)

```jsx
useEffect(() => {
  console.log("runs once");
}, []);
```

The empty array `[]` means "run this once when the component mounts, and that's it." This is like the old `componentDidMount` in class components. Perfect for things like fetching initial data or setting up subscriptions.

### With dependencies (runs when dependencies change)

```jsx
useEffect(() => {
  console.log("runs when count changes");
}, [count]);
```

Now the effect runs on the first render, and then again every time `count` changes. This is similar to `componentDidUpdate`, but more specific - you only re-run when the things you care about actually change.

## Cleanup functions

If your effect starts something that needs to be cleaned up (like a timer or subscription), you need to return a cleanup function. This cleanup runs before the effect runs again, or when the component unmounts.

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => {
    clearInterval(id); // cleanup
  };
}, []);
```

Think of it like the old `componentWillUnmount`, but it also runs before the effect re-runs if dependencies change.

The order of execution is important:
- When dependencies change: cleanup runs first, then the new effect
- When component unmounts: cleanup runs

## A complete timer example

Here's how you'd build a timer with useEffect:

```jsx
import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h1>Seconds: {seconds}</h1>;
}
```

Why the empty array `[]`? Because we only want to start the timer once when the component mounts. If we left it out, we'd create a new interval on every render, which would be a disaster.

Also notice we're using the functional form of setState: `setSeconds((s) => s + 1)`. This way we don't need `seconds` in the dependency array.

## Common mistakes

### Missing dependencies

```jsx
useEffect(() => {
  console.log(count);
}, []); // BUG: count is used but not listed
```

React will actually warn you about this. The fix is simple - just add it to the array:

```jsx
useEffect(() => {
  console.log(count);
}, [count]); // Correct
```

### Forgetting cleanup

This one creates memory leaks:

```jsx
useEffect(() => {
  setInterval(() => {}, 1000); // memory leak!
}, []);
```

Always clean up timers, subscriptions, and event listeners:

```jsx
useEffect(() => {
  const id = setInterval(() => {}, 1000);
  return () => clearInterval(id); // Cleanup
}, []);
```

## Quick reference

| Dependency Array | When it runs | Use case |
|-----------------|--------------|----------|
| None | Every render | Rarely needed |
| `[]` | Once (on mount) | Setup, initial fetch |
| `[value]` | On mount + when `value` changes | React to changes |

The key takeaway: always think about what should trigger your effect, and be explicit about it in the dependency array. And if you start something, make sure to clean it up.
