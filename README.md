# React Learning Path 🚀

Welcome! This repository is my **comprehensive React learning path**.  
Here, we don’t just write notes—we **code everything**. Each concept is paired with a **practice project**, so you learn by doing.  

The goal: by the time you finish this roadmap, you’ll have a **strong, practical understanding of React**, ready to build real-world apps.

---

## How to use this repo

1. Each folder corresponds to a **concept or topic**.
2. Inside each folder:
   - `README.md` explains the concept.
   - `code/` or individual files contain **practice projects**.
3. Tick off each concept **after completing the code and understanding the theory**.
4. Combine concepts into mini-projects as you progress (like a Dashboard app).

---

## 1️. Basics / Core React

| Concept               | Subtopics / Notes                       | Practice Project                                          |
|----------------------|----------------------------------------|-----------------------------------------------------------|
| React overview        | SPA, Virtual DOM, why React exists     | Know about the react                         |
| Setting up app        | create-react-app, Vite, folder structure, npm scripts | Initialize app and run `npm run dev`                        |
| JSX                   | Syntax, expressions, attributes, comments | Create a simple JSX page with headings, paragraphs, images |
| Rendering elements    | ReactDOM.createRoot, render            | Render multiple elements conditionally                    |
| Components            | Functional vs Class                     | Build a `Card` component and render multiple cards       |
| Props & Children      | Passing props, destructuring, children | Create a `ProfileCard` component that receives name, age, photo |
| State                 | useState, this.state                    | Counter app (increment/decrement)                         |
| Events                | onClick, onChange, passing params      | Button click alert, input logging                         |
| Conditional rendering | Ternary, logical AND                    | Show "Logged in" or "Guest" based on state               |
| Lists & keys          | map, unique keys                        | Display a list of products from an array                 |

---

## 2️. Advanced Component Concepts

| Concept                           | Subtopics / Notes                  | Practice Project                          |
|----------------------------------|-----------------------------------|-------------------------------------------|
| Component composition             | Nesting components, props drilling | Build `Dashboard` with `Header`, `Sidebar`, `Content` |
| Lifting state up                  | Share state between siblings      | Two inputs calculating sum                |
| Controlled vs uncontrolled inputs | value vs defaultValue             | Form with controlled inputs               |
| Handling forms                    | onSubmit, preventDefault          | Login form with validation                |
| Class lifecycles                  | componentDidMount, componentDidUpdate | Timer app using class component          |
| Hooks: useEffect                  | Dependencies, cleanup             | Fetch data from API on mount              |
| Hooks: useRef                     | Access DOM elements               | Focus input on button click               |
| Hooks: useMemo / useCallback      | Prevent unnecessary renders       | Optimize expensive calculation in a component |
| Custom hooks                      | Reusable logic                    | `useWindowSize` hook to track screen width |

---

## 3️. Routing & Navigation

| Concept                     | Subtopics / Notes               | Practice Project                       |
|-----------------------------|---------------------------------|----------------------------------------|
| React Router basics         | BrowserRouter, Routes, Route    | Multi-page site: Home, About, Contact |
| Dynamic routes & params     | :id, useParams                  | Product detail page based on ID       |
| Nested routes               | Layout components               | Dashboard with nested pages           |
| Navigation programmatically | useNavigate                     | Redirect to login if not authenticated |

---

## 4️. State Management

| Concept                  | Subtopics / Notes                  | Practice Project                  |
|--------------------------|-----------------------------------|----------------------------------|
| Context API              | Provide, Consume, useContext       | Theme switcher (dark/light)      |
| Redux / Redux Toolkit    | Store, slice, actions, reducers    | Todo app with Redux               |
| Redux async              | createAsyncThunk                   | Fetch API data and store in Redux|
| Zustand                  | Create store, update state, selectors | Simple counter using Zustand     |
| Compare Redux vs Zustand | When to use which                  | Reflect in notes after practice  |

---

## 5️. Data Fetching & Server State

| Concept            | Subtopics / Notes               | Practice Project                     |
|-------------------|---------------------------------|-------------------------------------|
| Fetch / Axios      | Basic GET/POST requests         | Fetch and display list of users      |
| React Query basics | useQuery, query keys, caching   | Fetch posts from JSONPlaceholder API |
| Mutations          | useMutation                     | Add, update, delete posts            |
| DevTools           | Query cache inspection          | Install React Query DevTools         |

---

## 6️. Styling & UI

| Concept                     | Subtopics / Notes      | Practice Project               |
|-----------------------------|----------------------|--------------------------------|
| CSS Modules                 | Scoped CSS            | Style `ProfileCard`            |
| Styled Components / Emotion | Dynamic styling       | Button component with variants |
| Tailwind CSS                | Utility-first CSS     | Responsive navbar              |
| Conditional classes         | Ternary / clsx library| Highlight active menu item     |

---

## 7️. Performance Optimization

| Concept          | Subtopics / Notes                      | Practice Project                                   |
|-----------------|----------------------------------------|--------------------------------------------------|
| Memoization      | React.memo, useMemo, useCallback       | Optimize list rendering with expensive calculation |
| Virtualization   | react-window, react-virtualized        | Display 1000+ rows efficiently                     |
| Lazy loading     | React.lazy, Suspense                   | Lazy load About page                               |
| Avoid re-renders | Prop drilling, splitting components    | Optimize Dashboard components                      |

---

## 8️. Testing

| Concept               | Subtopics / Notes         | Practice Project               |
|----------------------|---------------------------|-------------------------------|
| Jest                  | Unit testing functions    | Test a utility function       |
| React Testing Library | Render, screen, fireEvent | Test `Todo` component        |
| Mocking API           | Mock fetch / axios        | Test API calls without backend|

---

## 9️. Advanced Patterns

| Concept                       | Subtopics / Notes            | Practice Project                 |
|-------------------------------|-----------------------------|---------------------------------|
| Higher Order Components (HOC) | Reusable logic wrapper       | Logger HOC for components       |
| Render props                  | Pass functions as children   | Tooltip component               |
| Compound components           | Parent-child communication   | Tabs component                  |
| Portals                       | Render outside DOM hierarchy | Modal component                 |
| Error boundaries              | Catch errors in UI           | Wrap dashboard in error boundary|
| Custom hooks                  | Abstraction for reuse        | `useLocalStorage` hook          |

---

## 10️. Build & Deploy

| Concept              | Subtopics / Notes          | Practice Project                 |
|---------------------|---------------------------|---------------------------------|
| Env variables        | .env files, process.env    | API base URL handling            |
| Production build     | npm run build              | Build and check bundle size      |
| Deployment           | Netlify, Vercel            | Deploy your Todo app             |
| Performance analysis | React Profiler, Lighthouse | Identify and fix slow components|

---

### ⚡ Brutal Advice

- **Don’t just read** — code every example.  
- **Write small projects** for each concept.  
- After finishing a section, **combine components into mini-apps** to see how things integrate.  
- Keep your code clean and **comment your thought process**—future-you will thank you.
