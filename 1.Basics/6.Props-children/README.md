# React Props and Children Guide

Props and children are how components communicate with each other. Once you get these concepts, you can build really flexible, reusable components.

## What are Props?

Props stands for "properties" - they're basically inputs to a component. Components use props to receive data from their parent component. The important thing is that props are read-only. The component receives them, but it can't modify them.

Here's a simple example:

```jsx
function Card(props) {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>{props.hobby}</p>
    </div>
  );
}

// Usage
<Card name="Alice" age={12} hobby="Loves coding" />
<Card name="Bob" age={14} hobby="Plays football" />
```

Same Card component, different data. That's the power of props - you write the component once, then use it with different data.

## Destructuring Props

Writing `props.name`, `props.age`, etc. gets old fast. You can destructure props in the function parameters to make it cleaner:

```jsx
function Card({ name, age, hobby }) {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>{hobby}</p>
    </div>
  );
}
```

Much cleaner, right? You'll see this pattern everywhere in React code.

## What are Children?

`children` is a special prop in React. It represents whatever content you put between the opening and closing tags of a component.

Here's an example:

```jsx
function Card({ children }) {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
      {children}
    </div>
  );
}

// Usage
<Card>
  <h1>Alice's Card</h1>
  <p>Age: 12</p>
  <p>Loves coding</p>
</Card>

<Card>
  <h1>Bob's Card</h1>
  <p>Age: 14</p>
  <p>Plays football</p>
</Card>
```

Everything inside `<Card>...</Card>` becomes `props.children`. This lets the Card component wrap any content without knowing ahead of time what it will be. Super flexible.

## Combining Props and Children

You can use both together, which is really powerful:

```jsx
function Card({ title, children }) {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// Usage
<Card title="Profile Card">
  <p>Age: 12</p>
  <p>Loves coding</p>
</Card>
```

So `title` is a specific prop that the component expects, but `children` is flexible content that can be anything. This gives you both structure and flexibility.

## Key Points to Remember

1. Props are read-only - don't try to modify them inside the component
2. `children` lets components be wrappers for any content
3. Destructuring props makes your code cleaner and more readable
4. Props + children together = really powerful for building reusable, dynamic components

Once you get comfortable with props and children, you'll start seeing how to break down UIs into reusable pieces. That's when React really starts to click.

Next up: Learn about State (`useState`), which lets components change data dynamically. Props are read-only, but state lets components have their own data that can change over time.
