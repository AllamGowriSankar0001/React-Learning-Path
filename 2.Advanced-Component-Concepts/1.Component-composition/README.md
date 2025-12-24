# Component Composition, Nesting, and Props Drilling

## 1. Component composition

Component composition means building complex UIs by combining smaller components, instead of stuffing everything into one big component.

Think LEGO bricks:
- Small, reusable pieces
- Snap them together to form bigger structures

### Example

```jsx
function Button({ children }) {
  return <button>{children}</button>;
}

function Card() {
  return (
    <div>
      <Button>Save</Button>
      <Button>Cancel</Button>
    </div>
  );
}
```

**Here:**
- `Button` is a small, reusable component
- `Card` is composed of `Button`s

### Why composition matters

- **Reusability ♻️**
- Cleaner code
- Easier testing and maintenance
- Encourages single responsibility per component

## 2. Nesting components

Nesting is how composition actually happens.

It simply means putting one component inside another.

```jsx
function Layout({ children }) {
  return <main>{children}</main>;
}

function Page() {
  return (
    <Layout>
      <h1>Dashboard</h1>
    </Layout>
  );
}
```

**Here:**
- `Page` is nested inside `Layout`
- `children` is the special prop that makes nesting work

### Key idea

- Nesting = structure
- Composition = design pattern

## 3. Props drilling

Props drilling happens when you pass data through multiple layers of components, even if intermediate components don't need it.

### Example

```jsx
function App() {
  const user = { name: "Alex" };
  return <Dashboard user={user} />;
}

function Dashboard({ user }) {
  return <Profile user={user} />;
}

function Profile({ user }) {
  return <p>{user.name}</p>;
}
```

**Here:**
- `Dashboard` doesn't use `user`
- It just passes it along
- 👉 That's props drilling

### Why props drilling is a problem

- Components become tightly coupled
- Harder to refactor
- Easy to break things
- Makes component trees noisy and confusing

## 4. How to reduce props drilling

### 1️⃣ Use component composition

Instead of passing props down:

```jsx
function App() {
  const user = { name: "Alex" };

  return (
    <Dashboard>
      <Profile user={user} />
    </Dashboard>
  );
}

function Dashboard({ children }) {
  return <div>{children}</div>;
}
```

**Now:**
- `Dashboard` doesn't know about `user`
- Cleaner and more flexible

### 2️⃣ Use Context (when data is global-ish)

```jsx
const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value={{ name: "Alex" }}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = React.useContext(UserContext);
  return <p>{user.name}</p>;
}
```

**Use this when:**
- Many components need the same data
- Data changes infrequently

### 3️⃣ State management (Redux, Zustand, etc.)

**For:**
- Large apps
- Complex shared state
- Cross-page communication

## Quick summary

- **Component composition** → building UIs by combining small components
- **Nesting components** → placing components inside each other (children)
- **Props drilling** → passing props through components that don't need them
- **Best practice** → favor composition, avoid deep drilling, use context wisely
