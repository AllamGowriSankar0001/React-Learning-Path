## 3️⃣ JSX: The Heart of React

### What is JSX?

* JSX = JavaScript XML
* Write **HTML-like syntax inside JavaScript**
* React uses JSX to **describe the UI**
* Browsers don’t understand JSX directly — React **transpiles it into `React.createElement()`**

**Example:**

```javascript
const element = <h1>Hello, world!</h1>;
```

Under the hood:

```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```

### JSX Syntax Rules

1. **One parent element per return**

```javascript
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

2. **Use `className` instead of `class`**

```javascript
<div className="container">Content</div>
```

3. **Use `htmlFor` instead of `for`**

```javascript
<label htmlFor="input">Name:</label>
<input id="input" />
```

**Explanation:**

* `for` is a JavaScript keyword, so JSX uses `htmlFor` instead to avoid conflicts.
* Links the label to the input just like in normal HTML.

4. **Use `tabIndex` instead of `tabindex`**

```javascript
<button tabIndex={1}>Click me</button>
```

**Explanation:**

* JSX uses camelCase for most HTML attributes.
* Numbers or dynamic values can be passed inside `{}`.

5. **Close all tags**

```javascript
<img src="logo.png" alt="Logo" />
<input type="text" />
```

### Embedding JavaScript Expressions

* Use `{}` to embed JS expressions (not statements)

```javascript
const name = "Alice";
const element = <h1>Hello, {name}!</h1>;
const sum = <p>2 + 3 = {2 + 3}</p>;
```

* Functions can also be called inside `{}`:

```javascript
function greet(user) {
  return `Hi, ${user}!`;
}
const element = <h2>{greet("Bob")}</h2>;
```

### JSX Attributes

* CamelCase for some HTML attributes:

| HTML     | JSX       |
| -------- | --------- |
| class    | className |
| for      | htmlFor   |
| tabindex | tabIndex  |
| onclick  | onClick   |

* Dynamic values:

```javascript
const style = { color: "red", fontSize: "20px" };
<p style={style}>Styled text</p>
```

### JSX Comments

```javascript
return (
  <div>
    <h1>Hello</h1>
    {/* This is a comment */}
    <p>World</p>
  </div>
);
```

### Quick Takeaways

* JSX = HTML + JS in React components
* Everything inside `{}` is JavaScript
* Follow syntax rules (`className`, `htmlFor`, `tabIndex`, single parent, self-closing tags)
* Dynamic rendering via expressions

---

**Rule of thumb:**

* **CRA** → beginner-friendly, older but stable.
* **Vite** → fast, modern, preferred for new projects.
* **JSX** → the core of React; understand it before moving further.
