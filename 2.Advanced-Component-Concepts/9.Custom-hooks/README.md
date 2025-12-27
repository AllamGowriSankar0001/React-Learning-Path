# Custom Hooks

Custom hooks are one of the most powerful features in React. They let you extract component logic into reusable functions. Think of them as your own personal hooks that you can use across multiple components.

## What is a Custom Hook?

A custom hook is a JavaScript function that:

- **Starts with `use`** (this is a React convention, not optional)
- **Uses one or more built-in React hooks** (like `useState`, `useEffect`, etc.)
- **Encapsulates reusable logic** (not UI - hooks are for logic, not rendering)

👉 Think of custom hooks as logic containers that can be plugged into any component.

## Why Use Custom Hooks?

### Without Custom Hooks

When you don't use custom hooks, you end up with:

- **Duplicated logic** - Same code copy-pasted across multiple components
- **Long, messy components** - Components become hard to read and maintain
- **Harder to test** - Logic is mixed with UI, making testing difficult
- **Harder to reason about** - Everything is jumbled together

### With Custom Hooks

Custom hooks give you:

- ✅ **DRY code** (Don't Repeat Yourself) - Write logic once, use it everywhere
- ✅ **Cleaner, smaller components** - Components focus on rendering, not logic
- ✅ **Shared logic** - Use the same logic across multiple components
- ✅ **Easier to maintain** - Change logic in one place, it updates everywhere
- ✅ **Easier to test** - Test the hook separately from the component

## Basic Example: Counter Logic

### ❌ Without a Custom Hook (Duplicated Logic)

Here's what happens when you don't use a custom hook:

```jsx
function CounterA() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

function CounterB() {
  // Same logic duplicated! 😬
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </>
  );
}
```

Copying this logic into multiple components leads to duplication and maintenance nightmares.

### ✅ With a Custom Hook

**Step 1: Create the custom hook**

```jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = React.useState(initialValue);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return { count, increment, decrement };
}
```

**Step 2: Use it in components**

```jsx
function CounterA() {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

function CounterB() {
  const { count, increment } = useCounter(10); // Start at 10

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </>
  );
}
```

👉 The same logic, reused anywhere, with different configurations. Clean and maintainable!

## Example: Custom Hook with Side Effects (API Fetch)

One of the most common use cases for custom hooks is handling API calls. Here's a `useFetch` hook:

```jsx
function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
```

**Using the hook:**

```jsx
function Users() {
  const { data, loading, error } = useFetch("/api/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

function Posts() {
  const { data, loading, error } = useFetch("/api/posts");

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts!</p>;

  return (
    <div>
      {data?.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}
```

Now you can fetch data in any component with just one line! The loading and error states are handled consistently everywhere.

## More Custom Hook Examples

### useLocalStorage Hook

Save and sync state with localStorage:

```jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('name', 'Guest');
  
  return (
    <input 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
    />
  );
}
```

### useToggle Hook

Simple boolean toggle logic:

```jsx
function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);
  
  const toggle = () => setValue(v => !v);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  
  return [value, toggle, setTrue, setFalse];
}

// Usage
function Modal() {
  const [isOpen, toggle, open, close] = useToggle(false);
  
  return (
    <>
      <button onClick={toggle}>Toggle Modal</button>
      {isOpen && (
        <div>
          <p>Modal content</p>
          <button onClick={close}>Close</button>
        </div>
      )}
    </>
  );
}
```

### useDebounce Hook

Debounce a value (useful for search inputs):

```jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function SearchInput() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform search API call
      console.log('Searching for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

## Rules of Custom Hooks ⚠️

Custom hooks follow the same rules as React hooks:

### ✅ Must Do

- **Must start with `use`** - This is how React knows it's a hook
- **Can call other hooks** - Custom hooks can use built-in hooks or other custom hooks
- **Must be called at the top level** - Same as all React hooks

### ❌ Cannot Do

- **Cannot be called conditionally** - No `if` statements around hook calls
- **Cannot be called inside loops** - No `for` or `while` loops
- **Cannot be called inside regular functions** - Only in React components or other custom hooks

### Examples of What NOT to Do

```jsx
// ❌ BAD - Conditional hook call
function Component() {
  if (someCondition) {
    const value = useCustomHook(); // Don't do this!
  }
  return <div>...</div>;
}

// ❌ BAD - Hook in a loop
function Component() {
  for (let i = 0; i < 5; i++) {
    const value = useCustomHook(); // Don't do this!
  }
  return <div>...</div>;
}

// ❌ BAD - Hook in a regular function
function regularFunction() {
  const value = useCustomHook(); // Don't do this!
}

// ✅ GOOD - Hook at top level
function Component() {
  const value = useCustomHook(); // This is fine!
  return <div>...</div>;
}
```

## Best Practices

1. **Keep hooks focused** - One hook should do one thing well
2. **Return an object or array** - Use objects for named returns, arrays for ordered returns
3. **Handle edge cases** - Think about cleanup, error states, and edge cases
4. **Name them descriptively** - `useFetch` is better than `useData`
5. **Document your hooks** - Add comments explaining what the hook does and its parameters

## The Mental Model

Here's how I think about custom hooks:

- **Custom hooks = Reusable logic**
- **Components = UI rendering**
- **Hooks connect logic to components**

You write the logic once in a hook, then plug it into any component that needs it. It's like creating your own React API.

## Summary

Custom hooks are your way of creating reusable, testable, and maintainable logic in React. They follow the same rules as built-in hooks, but you get to define what they do. Start extracting common patterns into custom hooks, and you'll find your code becomes much cleaner and easier to work with.

Remember: **Logic in hooks, UI in components.**
