# useRef Hook

useRef is one of those hooks that seems weird at first, but once you get it, you'll use it all the time. It's basically a way to keep a reference to something that persists across renders but doesn't cause re-renders when it changes.

You create a ref like this:

```jsx
const myRef = useRef(null);
```

And you access the value through `.current`:

```jsx
myRef.current
```

## The main use case: accessing DOM elements

The most common reason you'll use useRef is to directly access DOM elements. Sometimes you need to do things like focus an input, scroll to an element, or measure its size. That's when useRef comes in handy.

Here's a simple example - focusing an input when you click a button:

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

Let me break down what's happening here:

1. `useRef(null)` creates the ref object
2. `ref={inputRef}` tells React to attach the actual DOM element to `inputRef.current`
3. `inputRef.current` is now the real DOM element, so you can call methods like `.focus()` on it

One thing to remember - `inputRef.current` is only available after React renders the component. So you typically access it in event handlers (like onClick) or inside useEffect hooks:

```jsx
useEffect(() => {
  inputRef.current.focus();
}, []);
```

## Why not just use document.querySelector?

You might be thinking "why not just use `document.querySelector`?" Well, you technically could, but it's not a good idea in React. Here's why:

```jsx
// Bad - don't do this
document.querySelector("input").focus();
```

vs

```jsx
// Good - use refs
inputRef.current.focus();
```

Using refs is better because:
- It works properly with React's virtual DOM
- It's safer when you have multiple instances of the same component
- You don't have to worry about selector conflicts
- React manages the connection between the ref and the element

## Important: useRef doesn't cause re-renders

This is a key difference from useState. When you update a ref's `.current` value, React doesn't re-render the component:

```jsx
const countRef = useRef(0);

countRef.current += 1;
console.log(countRef.current); // This works, but UI won't update
```

If you need the UI to update, use useState instead. useRef is for values you need to keep around but don't need to trigger renders.

## Other common DOM operations

Once you have a ref to a DOM element, you can do all sorts of things:

**Scroll to an element:**
```jsx
divRef.current.scrollIntoView();
```

**Measure an element's size:**
```jsx
const width = divRef.current.offsetWidth;
```

**Control media:**
```jsx
videoRef.current.play();
videoRef.current.pause();
```

## useRef vs useState

Here's a quick comparison:

| Feature | useRef | useState |
|---------|--------|----------|
| Causes re-render? | No | Yes |
| Updates UI? | No | Yes |
| Value persists? | Yes | Yes |
| Best for | DOM access, values that don't need UI updates | State that affects UI |

The rule of thumb: if you need the UI to update when something changes, use useState. If you just need to keep a reference to something (like a DOM element) or store a value that shouldn't trigger renders, use useRef.
