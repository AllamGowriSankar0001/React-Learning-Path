# useMemo and useCallback

So here's the thing - React components re-run their entire function every time they render. That means if you're doing something expensive like filtering a huge array or doing complex calculations, it's going to run again and again, even if nothing actually changed. Same with functions - every render creates a brand new function object, which can cause child components to re-render when they don't really need to.

That's where useMemo and useCallback come in. They're basically React's way of saying "hey, we already did this work, let's just reuse it unless something actually changed."

## useMemo - for expensive calculations

UseMemo is for memoizing values. Basically, it remembers the result of an expensive calculation and only recalculates when the dependencies change.

Here's the syntax:

```jsx
const value = useMemo(() => computeSomething(a, b), [a, b]);
```

If `a` or `b` haven't changed, React just gives you back the cached result. No recalculation needed.

Here's a practical example:

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

In this example, when you type in the input, the expensive calculation doesn't run again because `count` didn't change. It only recalculates when you click the button and `count` actually changes.

But here's the thing - don't go crazy with useMemo. If your calculation is simple (like `count * 2`), the overhead of memoization might actually make things slower. Only use it when you're actually doing something expensive. Overusing it can make your code harder to read and maintain.

## useCallback - for function references

UseCallback is basically useMemo but for functions. Since functions are objects in JavaScript, every render creates a new function reference. That's usually fine, but it matters when you're passing functions to memoized child components (using React.memo) or when functions are dependencies in useEffect.

```jsx
const memoizedFn = useCallback(() => {
  doSomething();
}, [deps]);
```

Actually, `useCallback` is technically just syntactic sugar. You could write it as:

```jsx
useMemo(() => () => doSomething(), [deps]);
```

But useCallback is cleaner and easier to read.

Here's when it really helps:

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

Without useCallback, the `handleClick` function gets recreated on every render, so React.memo sees a "new" prop and re-renders the Child. With useCallback, the function reference stays the same, so Child doesn't re-render unnecessarily.

## useMemo vs useCallback - quick comparison

| Hook | What it memoizes | When to use |
|------|-----------------|-------------|
| useMemo | A value/result | Expensive calculations |
| useCallback | A function | Stable function references needed |

Simple rule: useMemo is "don't recalculate this", useCallback is "don't recreate this function".

## Common mistake to avoid

This is something I see a lot, and it's actually useless:

```jsx
const fn = useCallback(() => {
  setCount(count + 1);
}, [count]);
```

Why is this pointless? Because `count` is in the dependency array, so every time `count` changes, the function gets recreated anyway. You just defeated the purpose of useCallback.

The fix is to use the functional update form of setState:

```jsx
const fn = useCallback(() => {
  setCount(c => c + 1);
}, []);
```

Now the function never needs to depend on `count`, so it stays stable.

## Important: they don't prevent renders

I need to make this super clear - useMemo and useCallback do NOT prevent re-renders. They prevent recalculation and prevent new references from being created, but the component will still re-render if its props or state change.

If you want to actually prevent re-renders, you need React.memo for the component itself. Then useMemo and useCallback help make React.memo work properly.

## The mental model

Here's how I think about them:
- useMemo remembers results
- useCallback remembers functions

That's really it. Simple concept, but super useful when applied correctly.
