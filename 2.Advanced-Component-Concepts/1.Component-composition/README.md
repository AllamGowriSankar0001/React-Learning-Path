# Component Composition, Nesting, and Props Drilling

## Component composition - building with small pieces

Component composition is basically the idea of building complex UIs by combining smaller, reusable components. Instead of writing one massive component that does everything, you build small components and snap them together like LEGO bricks.

Think about LEGO:
- Small, reusable pieces
- Snap them together to form bigger structures
- Each piece has a specific purpose

Same idea with React components.

Here's a simple example:

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

`Button` is a small, reusable component. `Card` is composed of multiple `Button` components. Simple, but powerful.

Why does composition matter?
- **Reusability** - write once, use everywhere
- Cleaner, more readable code
- Easier to test (test small pieces)
- Easier to maintain
- Each component has a single responsibility

## Nesting components - how composition works

Nesting is just putting one component inside another. It's how composition actually happens in practice.

Here's what nesting looks like:

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

`Page` is nested inside `Layout`. The `children` prop is the special prop that makes this work - it's whatever you put between the opening and closing tags.

The key idea:
- Nesting = the structure (how components are arranged)
- Composition = the design pattern (building big things from small things)

## Props drilling - the annoying problem

Props drilling happens when you need to pass data through multiple layers of components, even when the middle components don't actually need that data. They're just passing it along.

Here's an example:

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

See the problem? `Dashboard` doesn't actually use `user` - it just receives it and immediately passes it down to `Profile`. That's props drilling, and it's annoying.

Why props drilling is annoying:
- Components become tightly coupled
- Harder to refactor (change one thing, break everything)
- Easy to accidentally break things
- Makes the component tree noisy with props that don't matter to intermediate components

## How to reduce props drilling

### Option 1: Component composition

Instead of passing props down through layers, you can compose components differently:

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

Now `Dashboard` doesn't know about `user` at all. It just renders whatever children are passed to it. Much cleaner.

### Option 2: Context API (for global-ish data)

If many components need the same data, Context might be a better solution:

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

Use Context when:
- Many components need the same data
- The data doesn't change super frequently
- Props drilling is getting really annoying

### Option 3: State management libraries

For really large apps with complex shared state, you might want something like Redux or Zustand. But most apps don't need this - composition and Context usually handle it fine.

## Quick summary

- **Component composition** → building UIs by combining small components
- **Nesting components** → putting components inside each other (using `children`)
- **Props drilling** → passing props through components that don't need them
- **Best practice** → favor composition, avoid deep drilling, use Context when it makes sense

The goal is to keep your components focused and your props clean. If you find yourself drilling props through 5 layers of components, there's probably a better way to structure it.
