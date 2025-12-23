# React Props and Children Guide

This README explains **props** and **children** in React, showing how to build reusable and dynamic components.

---

## 1️⃣ What are Props?

* **Props** = “properties” → **inputs to a component**.
* Components use props to **receive data from their parent**.
* Props are **read-only**; components **cannot modify them**.

**Example:**

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

* Each Card renders **different content dynamically** based on props.

---

## 2️⃣ Destructuring Props

* Instead of writing `props.name`, `props.age`, etc., you can **destructure**:

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

* Cleaner and easier to read.

---

## 3️⃣ What are Children?

* **`children`** is a special prop in React that represents **any content placed between the opening and closing tags of a component**.

**Example:**

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

* Everything inside `<Card>...</Card>` becomes **`props.children`**.
* This allows the `Card` component to **wrap any content dynamically** without knowing in advance what it will contain.

---

## 4️⃣ Combining Props & Children

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

* `title` is a **specific prop**.
* `children` is **flexible content inside the component**.
* This shows how a component can combine **fixed and dynamic content**.

---

## 5️⃣ Key Points

1. Props are **read-only** → do not modify inside the component.
2. `children` allows components to be **wrappers for any content**.
3. Destructuring props makes code **cleaner and more readable**.
4. Props + children = **powerful for building reusable, dynamic components**.

---

Next: Learn **State (`useState`)**, which allows components to **change data dynamically**, unlike props which are read-only.
