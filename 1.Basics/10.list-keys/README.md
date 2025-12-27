# Lists & Keys in React

Most apps need to display lists of things - users, todos, products, whatever. React makes this pretty straightforward, but there's one important concept you need to understand: keys.

## Rendering Lists in React

In React, you usually render lists by looping over an array and returning JSX. The most common way is using `map()`.

## Using map() to Render a List

Here's a basic example:

```jsx
function App() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}
```

This will work, but React will show you a warning in the console. Why? Because you're missing the `key` prop.

## What Are Keys?

Keys help React identify which items changed, were added, or removed. Think of them as unique IDs for each item in the list. They help React:
- Update the UI efficiently
- Keep track of which items are which when the list changes

Keys need to be:
- **Unique** - each item needs a different key
- **Stable** - the same item should have the same key across renders

## Adding a Unique key

Here's the fix for the example above:

```jsx
<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>
```

Using `index` as the key works, but it's not recommended if the list can change (items added, removed, or reordered).

## Best Practice: Use an ID

If your data has unique IDs, use those. That's the best approach:

```jsx
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

<ul>
  {users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ))}
</ul>
```

Why is this better?
- Keys are unique (each user has a different ID)
- Keys are stable (the same user always has the same ID)
- React can efficiently track which item is which

This is the recommended approach. If your data doesn't have IDs, you might need to add them or use a library to generate them.

## Why Not Use Index as Key?

Using index can cause bugs when:
- Items are added to the list
- Items are removed from the list
- The list gets reordered

Here's a problematic example:

```jsx
{items.map((item, index) => (
  <input key={index} value={item} />
))}
```

If you remove one item, React might reuse the wrong DOM element, which can mix up input values or cause other weird issues. It's fine for static lists that never change, but for dynamic lists, use unique IDs.

## Keys Are Not Props

Here's something important to understand: `key` is used internally by React. You can't access it inside the component as a prop.

```jsx
// ❌ This won't work
function Item({ key }) {
  // key is undefined here
}
```

If you need the ID inside the component, pass it as a separate prop:

```jsx
// ✅ This works
function Item({ id }) {
  return <div>{id}</div>
}

<Item key={user.id} id={user.id} />
```

The `key` prop is for React's internal use, but you can pass the same value as a regular prop if you need it.

## Rendering Components in a List

You can render full components in a list too:

```jsx
function User({ name }) {
  return <li>{name}</li>;
}

<ul>
  {users.map((user) => (
    <User key={user.id} name={user.name} />
  ))}
</ul>
```

Same rules apply - each component needs a unique key.

## Nested Lists Example

If you have nested lists, each level needs its own unique keys:

```jsx
{categories.map((cat) => (
  <div key={cat.id}>
    <h3>{cat.name}</h3>
    <ul>
      {cat.items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  </div>
))}
```

Each `map()` creates its own list, so each needs its own keys. Just make sure the keys are unique within their own list.

## Summary

- Use `map()` to render lists
- Always add a `key` prop
- Prefer unique IDs over index (especially for dynamic lists)
- Keys must be stable and unique
- Keys help React update efficiently

Keys might seem like a small detail, but they're really important for React's performance and correctness. Once you get in the habit of always adding keys, it becomes second nature.
