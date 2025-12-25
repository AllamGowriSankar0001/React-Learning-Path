# useRef Hook

## What is useRef?

`useRef` gives you a persistent box that:

- Holds a value
- Does **NOT** cause re-renders
- Stays the same between renders

```jsx
const myRef = useRef(null);
```

You access the value with:

```jsx
myRef.current
```

## Accessing DOM elements (main use case)

### Example: focus an input

```jsx
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}
```

### What's happening?

1. `useRef(null)` → creates a ref
2. `ref={inputRef}` → React connects it to the `<input>`
3. `inputRef.current` → actual DOM element
4. `.focus()` → native DOM method

### When is `.current` available?

👉 **After the component renders**

So DOM access usually goes in:

- Event handlers (click, submit)
- `useEffect`

```jsx
useEffect(() => {
  inputRef.current.focus();
}, []);
```

## Why not `document.querySelector`?

❌ **Bad in React:**

```jsx
document.querySelector("input").focus();
```

✔️ **Good in React:**

```jsx
inputRef.current.focus();
```

**Because:**
- Works with React's virtual DOM
- Safer with multiple components
- No selector conflicts

## useRef does NOT re-render

```jsx
const countRef = useRef(0);

countRef.current += 1;
console.log(countRef.current);
```

👉 UI does **not** update
👉 Unlike `useState`

## Other common DOM examples

### Scroll to an element

```jsx
divRef.current.scrollIntoView();
```

### Measure size

```jsx
const width = divRef.current.offsetWidth;
```

### Play / pause video

```jsx
videoRef.current.play();
```

## Quick summary

| Feature | useRef | useState |
|---------|--------|----------|
| Causes re-render? | ❌ No | ✅ Yes |
| Updates UI? | ❌ No | ✅ Yes |
| Value persists? | ✅ Yes | ✅ Yes |
| Best for | DOM access, values that don't need UI updates | State that affects UI |

**Remember:** Use `useRef` when you need to access DOM elements or store values that don't trigger re-renders!

