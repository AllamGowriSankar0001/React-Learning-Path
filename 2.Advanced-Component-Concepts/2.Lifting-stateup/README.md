# Lifting State Up

## Meaning

Move state to the closest common parent of the components that need it.

## Why

If two components need the same data, keeping state in only one of them causes duplication or syncing bugs. React's fix is:
👉 Put the state higher up and pass it down as props.

## Before (problem)

- Component A has state
- Component B also needs that state
- They can't directly talk to each other

## After (solution)

- Parent holds the state
- Parent passes:
  - data down as props
  - functions down so children can update the state

## Sharing state between siblings

**Important rule:**
👉 Siblings cannot share state directly

They don't see each other's state.

**How to share it?**
By lifting the state up to their parent.

## Simple example

### Goal

Two siblings:
- Input
- Display

Typing in Input should update Display.

### Parent (state is lifted here)

```jsx
function Parent() {
  const [text, setText] = React.useState("");

  return (
    <>
      <Input text={text} setText={setText} />
      <Display text={text} />
    </>
  );
}
```

### Sibling 1: Input (updates state)

```jsx
function Input({ text, setText }) {
  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
```

### Sibling 2: Display (reads state)

```jsx
function Display({ text }) {
  return <p>{text}</p>;
}
```

## What's happening

- Parent owns the state
- Input updates the state
- Display uses the same state
- State flows down
- Events flow up
- This is called "single source of truth"

## Mental model to remember 🧠

- ❌ Don't sync state between siblings
- ✅ Lift it up to the nearest common parent
- ✅ Pass data down, callbacks up

