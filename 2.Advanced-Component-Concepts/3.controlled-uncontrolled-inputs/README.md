# Controlled vs Uncontrolled Inputs

## Controlled inputs

### Meaning

React controls the input's value via state.

- Input value comes from React state
- Every change goes through `onChange`
- Single source of truth = React

### Example (controlled)

```jsx
function ControlledInput() {
  const [name, setName] = React.useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

### Key traits

- ✅ Easy validation
- ✅ Easy to reset
- ✅ Easy to sync with other UI
- ❌ More re-renders
- ❌ Slightly more code

## Uncontrolled inputs

### Meaning

The DOM controls the input. React reads it only when needed.

- No state updates on every keystroke
- Uses `defaultValue` instead of `value`
- Access value via ref

### Example (uncontrolled)

```jsx
function UncontrolledInput() {
  const inputRef = React.useRef();

  function handleSubmit() {
    console.log(inputRef.current.value);
  }

  return (
    <>
      <input defaultValue="John" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

### Key traits

- ✅ Less code
- ✅ Better for simple forms
- ❌ Harder validation
- ❌ Harder to sync with UI

## value vs defaultValue

| Feature | `value` | `defaultValue` |
|---------|---------|----------------|
| Controlled? | ✅ Yes | ❌ No |
| Who owns data? | React state | DOM |
| Updates after render? | ✅ Yes | ❌ No |
| Needs onChange? | ✅ Yes | ❌ No |
| Can change programmatically? | ✅ Yes | ❌ No |

## The critical difference (this trips people up)

```jsx
<input value={state} />
```

React forces the value

- If state doesn't change → input won't change

```jsx
<input defaultValue="hello" />
```

Sets initial value only

- After that, React is hands-off

## Common mistake 🚨

```jsx
<input value={name} />
```

❌ No `onChange` → input becomes read-only

React will warn you.

## When to use which?

### Use controlled inputs when:

- You need validation
- You need live feedback
- You need to reset or modify input
- Forms are complex
- 👉 Most React apps

### Use uncontrolled inputs when:

- Simple forms
- Performance matters
- Migrating legacy code
- Quick one-off inputs

