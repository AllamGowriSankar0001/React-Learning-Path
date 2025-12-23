# Lists & Keys in React

A comprehensive guide to rendering lists in React, focusing on `map()` and unique keys.

---

## 1. Rendering Lists in React

In React, you usually render lists by looping over an array and returning JSX.

**The most common way is using `map()`.**

---

## 2. Using map() to Render a List

### Basic Example

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

❌ **This will work, but React will show a warning.**

**Why?** → Missing `key` prop

---

## 3. What Are Keys?

Keys help React identify which items changed, were added, or removed.

They improve:

- **Performance**
- **Correct UI updates**

### 👉 Keys must be:

- **Unique**
- **Stable** (don't change over time)

---

## 4. Adding a Unique key

### Correct Version

```jsx
<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>
```

⚠ **Using index works, but is not recommended if the list can change.**

---

## 5. Best Practice: Use an ID

### Better Example

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

- ✔ Keys are unique
- ✔ Stable across re-renders
- ✔ Best practice

---

## 6. Why Not Use Index as Key?

Using index can cause bugs when:

- Items are added
- Items are removed
- List is reordered

### ❌ Problem Example

```jsx
{items.map((item, index) => (
  <input key={index} value={item} />
))}
```

If you remove one item, React may:

- Reuse the wrong DOM element
- Mix up input values

---

## 7. Keys Are Not Props

❗ **React uses `key` internally**  
You cannot access it inside the component

### ❌

```jsx
function Item({ key }) {
  // undefined
}
```

### ✅

```jsx
function Item({ id }) {
  return <div>{id}</div>;
}

<Item key={user.id} id={user.id} />
```

---

## 8. Rendering Components in a List

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

---

## 9. Nested Lists Example

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

Each level needs its own unique key.

---

## Summary

- Use `map()` to render lists
- Always add a `key`
- Prefer unique IDs over index
- Keys must be stable & unique
- Keys help React update efficiently

