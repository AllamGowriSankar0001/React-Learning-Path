# Handling Forms in React

## Why forms need special handling

By default, HTML forms:
- Submit to the server
- Reload the page
- Clear JavaScript state ❌

React apps are single-page apps, so we must stop that default behavior.

## onSubmit

Fired when:
- You click a submit button
- You press Enter inside an input

Belongs on the `<form>` element (not the button)

```jsx
<form onSubmit={handleSubmit}>
```

- ✅ This is better than `onClick` on a button
- ✅ Works for keyboard users
- ✅ One place to handle submission

## preventDefault()

Stops the browser's default form submission.

```jsx
function handleSubmit(e) {
  e.preventDefault();
}
```

**Without it:**
- Page reloads
- React state resets
- UI breaks

## Basic React form pattern

```jsx
function Form() {
  const [name, setName] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Why onSubmit > onClick

❌ **Bad:**

```jsx
<button onClick={handleSubmit}>Submit</button>
```

**Problems:**
- Enter key doesn't work
- Accessibility issues
- Multiple buttons cause bugs

✅ **Good:**

```jsx
<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

## Common mistakes 🚨

### 1️⃣ Forgetting preventDefault

```jsx
e.preventDefault(); // must be exact spelling
```

Typo like `preventdefaults()` ❌ breaks everything.

### 2️⃣ Controlled input without onChange

```jsx
<input value={name} /> // ❌ read-only
```

Always pair `value` with `onChange`.

### 3️⃣ Using onClick instead of onSubmit

Leads to inconsistent behavior.

## What happens step-by-step

1. User submits form
2. `onSubmit` fires
3. `preventDefault()` stops reload
4. React handles data
5. UI updates via state

## One-sentence summary 🧠

`onSubmit` handles the form event; `preventDefault` stops the browser so React can take over.

