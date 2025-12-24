# useEffect Hook

## What is useEffect?

`useEffect` lets you run side effects in function components:

- Timers
- Data fetching
- Subscriptions
- DOM updates

```jsx
useEffect(() => {
  // effect code
});
```

## 1️⃣ Dependencies (the dependency array)

The dependency array tells React when to run the effect.

### A) No dependency array

```jsx
useEffect(() => {
  console.log("runs every render");
});
```

📌 **Runs:**
- On first render
- On every re-render

❗ **Rarely what you want.**

### B) Empty dependency array `[]`

```jsx
useEffect(() => {
  console.log("runs once");
}, []);
```

📌 **Runs:**
- Once when component mounts
- ✔️ Like `componentDidMount`

### C) With dependencies `[value]`

```jsx
useEffect(() => {
  console.log("runs when count changes");
}, [count]);
```

📌 **Runs:**
- First render
- Every time `count` changes
- ✔️ Like `componentDidUpdate` (for `count`)

## 2️⃣ Cleanup function

If your effect starts something, you must clean it up.

**Cleanup runs:**
- Before the effect runs again
- When the component unmounts

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

✔️ **Cleanup = `componentWillUnmount`**

## 🔁 Order of execution (important)

**When dependencies change:**
```
cleanup (old effect)
↓
run new effect
```

**When component unmounts:**
```
cleanup runs
```

## 🧠 Timer example (hooks version)

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

**Why `[]`?**
- Start timer once
- Don't restart it on every render

## 🚨 Common mistakes

### ❌ Missing dependency

```jsx
useEffect(() => {
  console.log(count);
}, []); // BUG: count is used but not listed
```

**Fix:**
```jsx
useEffect(() => {
  console.log(count);
}, [count]); // ✅ Correct
```

### ❌ No cleanup

```jsx
useEffect(() => {
  setInterval(() => {}, 1000); // memory leak
}, []);
```

**Fix:**
```jsx
useEffect(() => {
  const id = setInterval(() => {}, 1000);
  return () => clearInterval(id); // ✅ Cleanup
}, []);
```

## Quick summary

| Dependency Array | When it runs | Use case |
|-----------------|--------------|----------|
| None | Every render | Rarely needed |
| `[]` | Once (on mount) | Setup, initial fetch |
| `[value]` | On mount + when `value` changes | React to changes |

**Remember:** Always clean up effects that create subscriptions, timers, or listeners!

