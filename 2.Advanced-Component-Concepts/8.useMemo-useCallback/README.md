# useMemo and useCallback

## The core problem

In React:

- Every render re-runs the component function

That means:

- Expensive calculations run again
- New function objects are created
- Child components may re-render unnecessarily

👉 **useMemo** and **useCallback** help reuse previous results instead of recalculating or recreating things.

---

## useMemo

**"Memoize a VALUE"**

### Use it when:

- A calculation is expensive
- The result doesn't need to change on every render

### Syntax

```jsx
const value = useMemo(() => computeSomething(a, b), [a, b]);
```

- Runs `computeSomething` only when dependencies change
- Otherwise, React returns the cached value

### Example: Expensive calculation

```jsx
import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveResult = useMemo(() => {
    console.log("Calculating...");
    return count * 1000;
  }, [count]);

  return (
    <>
      <input onChange={(e) => setText(e.target.value)} />
      <p>{expensiveResult}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

### What this prevents

- Typing in the input does **NOT** rerun the expensive calculation
- Calculation runs only when `count` changes

### When NOT to use useMemo

- ❌ Simple calculations
- ❌ "Just in case" optimization
- ❌ Values not expensive to compute

**Overusing useMemo can make code slower and harder to read.**

---

## useCallback

**"Memoize a FUNCTION"**

Functions are objects. New render = new function reference.

### This matters when:

- Passing functions to memoized child components
- Using functions as dependencies in `useEffect`

### Syntax

```jsx
const memoizedFn = useCallback(() => {
  doSomething();
}, [deps]);
```

This is equivalent to:

```jsx
useMemo(() => () => doSomething(), [deps]);
```

### Example: Prevent child re-render

```jsx
import { memo, useCallback, useState } from "react";

const Child = memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child onClick={handleClick} />
    </>
  );
}
```

### What this prevents

- **Without useCallback:** Child re-renders every time
- **With useCallback:** Child renders only once

---

## useMemo vs useCallback

| Hook | Memoizes | Use when |
|------|----------|----------|
| `useMemo` | a value | expensive calculations |
| `useCallback` | a function | stable function reference |

### 🧠 Rule of thumb

- `useMemo` → "Don't recalculate"
- `useCallback` → "Don't recreate"

---

## Common mistake (very important)

❌ **This does NOTHING useful:**

```jsx
const fn = useCallback(() => {
  setCount(count + 1);
}, [count]);
```

**Why?**

- `count` changes → function is recreated anyway

✅ **Better:**

```jsx
const fn = useCallback(() => {
  setCount(c => c + 1);
}, []);
```

---

## Do these hooks prevent renders?

### ⚠️ Important truth

- `useMemo` ❌ does **NOT** prevent re-renders
- `useCallback` ❌ does **NOT** prevent re-renders

They only:

- Prevent recalculation
- Prevent new references

👉 **To actually stop re-renders:**

- `React.memo`
- `useMemo` / `useCallback` together

---

## One-line mental model

- `useMemo` remembers **results**
- `useCallback` remembers **functions**

---

## Quick decision guide

### Use useMemo when:
- ✅ Calculating expensive values
- ✅ Processing large arrays/objects
- ✅ Avoiding unnecessary recalculations

### Use useCallback when:
- ✅ Passing functions to `React.memo` children
- ✅ Functions are dependencies in `useEffect`
- ✅ Avoiding unnecessary function recreations

### Don't use when:
- ❌ Simple calculations
- ❌ Premature optimization
- ❌ Not experiencing performance issues

