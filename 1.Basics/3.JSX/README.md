# JSX: The Heart of React

JSX is probably the first thing that looks weird when you're learning React. You're writing HTML-like syntax inside JavaScript? That can't be right, can it?

Actually, it is right, and once you get used to it, it makes a lot of sense.

## What is JSX?

JSX stands for JavaScript XML. It's basically HTML-like syntax that you write inside JavaScript. React uses JSX to describe what the UI should look like.

Here's the thing though - browsers don't understand JSX directly. React takes your JSX and transpiles it (converts it) into regular JavaScript function calls. So when you write:

```javascript
const element = <h1>Hello, world!</h1>;
```

Under the hood, React converts it to:

```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```

You don't need to write it that way, but it's good to know what's happening behind the scenes.

## JSX Syntax Rules

There are a few rules you need to follow, and they trip people up at first.

### 1. One parent element per return

You can't return multiple elements at the top level. You need to wrap them:

```javascript
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

Or you can use a React Fragment (empty tags):

```javascript
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```

### 2. Use `className` instead of `class`

This one trips up everyone at first. In HTML you'd write `class="container"`, but in JSX it's `className`:

```javascript
<div className="container">Content</div>
```

Why? Because `class` is a reserved keyword in JavaScript. React uses `className` to avoid conflicts.

### 3. Use `htmlFor` instead of `for`

Same reason - `for` is a JavaScript keyword:

```javascript
<label htmlFor="input">Name:</label>
<input id="input" />
```

This links the label to the input just like regular HTML, but JSX needs `htmlFor` instead of `for`.

### 4. Use `tabIndex` instead of `tabindex`

JSX uses camelCase for most HTML attributes:

```javascript
<button tabIndex={1}>Click me</button>
```

Notice the curly braces around the number - that's how you pass dynamic values in JSX.

### 5. Close all tags

In HTML, some tags are self-closing (like `<img>` and `<input>`). In JSX, you need to explicitly close them:

```javascript
<img src="logo.png" alt="Logo" />
<input type="text" />
```

That forward slash before the closing `>` is required.

## Embedding JavaScript in JSX

Here's where JSX gets powerful. You can put JavaScript expressions inside curly braces `{}`:

```javascript
const name = "Alice";
const element = <h1>Hello, {name}!</h1>;
const sum = <p>2 + 3 = {2 + 3}</p>;
```

You can call functions too:

```javascript
function greet(user) {
  return `Hi, ${user}!`;
}
const element = <h2>{greet("Bob")}</h2>;
```

Just remember - it has to be an expression, not a statement. So you can do `{2 + 3}` but not `{if (true) {}}`. For conditionals, you'll use ternary operators or logical AND.

## JSX Attributes

Most HTML attributes get converted to camelCase in JSX. Here are the common ones:

| HTML     | JSX       |
| -------- | --------- |
| class    | className |
| for      | htmlFor   |
| tabindex | tabIndex  |
| onclick  | onClick   |

And you can pass dynamic values:

```javascript
const style = { color: "red", fontSize: "20px" };
<p style={style}>Styled text</p>
```

Notice that inline styles are objects, not strings. That's another JSX thing to get used to.

## Comments in JSX

Comments look different in JSX - you wrap them in curly braces and use `/* */`:

```javascript
return (
  <div>
    <h1>Hello</h1>
    {/* This is a comment */}
    <p>World</p>
  </div>
);
```

## Quick Takeaways

- JSX = HTML + JavaScript in React components
- Everything inside `{}` is JavaScript
- Follow the syntax rules (className, htmlFor, tabIndex, single parent, self-closing tags)
- Use curly braces for dynamic values

The more you write JSX, the more natural it feels. At first it seems weird mixing HTML and JavaScript, but once you get it, you'll wonder how you ever built UIs without it.
