# Lifting State Up

Lifting state up is one of those React concepts that sounds fancy but is actually pretty straightforward once you see it in action. The basic idea is: if two components need to share state, move that state up to their closest common parent and pass it down as props.

## Why we need this

Here's the problem: if Component A has some state, and Component B also needs that same state, they can't directly talk to each other. React components are isolated - they can't see each other's state. So what do you do?

The solution: put the state in their parent component. The parent can then pass the state down to both children as props, along with functions to update it.

## The before and after

**Before (the problem):**
- Component A has state
- Component B needs that same state
- They can't communicate directly
- You'd end up with duplicate state or bugs trying to sync them

**After (the solution):**
- Parent component holds the state
- Parent passes the data down as props
- Parent passes update functions down as props
- Both children use the same state from the parent

## Sharing state between siblings

This is the key rule: siblings cannot share state directly. They don't have access to each other's state. If two sibling components need the same data, you have to lift the state up to their common parent.

Here's a simple example to illustrate:

### The goal

We want two sibling components:
- An Input component where you can type
- A Display component that shows what you typed

When you type in Input, Display should update. How?

### The solution - lift state to parent

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

The parent owns the state. Simple.

### Sibling 1: Input (updates the state)

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

The Input receives the state and the update function as props, so it can update the state.

### Sibling 2: Display (reads the state)

```jsx
function Display({ text }) {
  return <p>{text}</p>;
}
```

The Display component just receives the text and shows it. Both siblings are using the same state from the parent.

## What's happening here

- The parent owns the state (single source of truth)
- The Input component updates the state
- The Display component reads the same state
- State flows down (from parent to children via props)
- Events flow up (children call functions from parent to update state)

This is React's data flow in action. Data flows down, events flow up.

## The mental model

Remember these rules:
- Don't try to sync state between siblings
- Lift state up to the nearest common parent
- Pass data down as props
- Pass functions down so children can update the state

That's really it. If you find yourself wanting to share state between components, find their common parent and put the state there.
