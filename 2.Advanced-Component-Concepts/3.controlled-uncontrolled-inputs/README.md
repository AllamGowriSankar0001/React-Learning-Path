# Controlled vs Uncontrolled Inputs

In React, you have two ways to handle input fields: controlled and uncontrolled. This is one of those concepts that trips people up at first, but once you get it, it makes total sense.

## Controlled inputs - React is in charge

With controlled inputs, React controls the input's value through state. The input value comes from React state, and every change goes through an `onChange` handler. React is the single source of truth.

Here's what it looks like:

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

Notice two things:
- `value={name}` - the input's value comes from state
- `onChange={(e) => setName(e.target.value)}` - every keystroke updates state

Why use controlled inputs?
- Easy to validate as the user types
- Easy to reset the form (just set state back to empty)
- Easy to sync with other UI elements
- React has full control

The downsides:
- More re-renders (every keystroke triggers a render)
- Slightly more code

## Uncontrolled inputs - the DOM is in charge

With uncontrolled inputs, the DOM controls the input's value. React doesn't manage it with state - instead, you use `defaultValue` to set an initial value, and then you read the value using a ref when you need it.

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

Notice:
- `defaultValue` instead of `value` - this only sets the initial value
- No `onChange` handler needed
- We read the value via `inputRef.current.value` when we need it

Why use uncontrolled inputs?
- Less code
- Better for simple forms
- Fewer re-renders

The downsides:
- Harder to validate in real-time
- Harder to sync with other UI
- Can't easily reset the form
- Less React-y (you're working with the DOM directly)

## The key difference: value vs defaultValue

This is what confuses people the most. Here's the difference:

```jsx
<input value={state} />
```

When you use `value`, React controls the input completely. If the state doesn't change, the input won't change. React is forcing the value.

```jsx
<input defaultValue="hello" />
```

When you use `defaultValue`, React sets the initial value and then hands control back to the DOM. After the first render, React doesn't care what's in the input anymore.

## Common mistake

This is a super common mistake:

```jsx
<input value={name} />
// ❌ Missing onChange - input becomes read-only!
```

If you use `value` without `onChange`, React makes the input read-only because React is controlling the value but you're not allowing it to update. React will warn you about this in the console.

Always pair `value` with `onChange` for controlled inputs.

## When to use which?

Use controlled inputs when:
- You need validation as the user types
- You need live feedback (like character count)
- You need to reset or modify the input programmatically
- Your forms are complex
- You're building most modern React apps (this is usually what you want)

Use uncontrolled inputs when:
- The form is super simple
- Performance really matters (though this is rarely an issue)
- You're migrating old code
- It's a quick one-off input where you don't need React to manage it

Honestly, most of the time you'll want controlled inputs. They're more React-y, easier to work with, and give you more control. Uncontrolled inputs have their place, but controlled is usually the way to go.

## Quick comparison table

| Feature | `value` (controlled) | `defaultValue` (uncontrolled) |
|---------|---------|----------------|
| Controlled by React? | Yes | No |
| Who owns the data? | React state | DOM |
| Updates after render? | Yes | No |
| Needs onChange? | Yes | No |
| Can change programmatically? | Yes | No |

The mental model: controlled = React owns it, uncontrolled = DOM owns it.
