# React State: `useState` vs `this.state`

State is local data that can change over time. When state updates, React re-renders the component so the UI reflects the new data.

## 1) `useState` (functional — modern)
- Hook for functional components; recommended for new code.
- Syntax:
  ```jsx
  const [state, setState] = useState(initialValue);
  ```

Example:
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```
- `count`: current state value
- `setCount`: updater function
- `useState(0)`: sets the initial value
- Calling `setCount` updates state and triggers a re-render
- ✅ Best choice for modern React projects.

## 2) `this.state` (class — legacy)
- Used in class components; mostly seen in older codebases.

Example:
```jsx
import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
```
- `this.state.count`: access current state
- `this.setState()`: updates state (merges updates instead of replacing)
- ⚠️ Not recommended for new projects.

## Key differences
| Feature          | `useState` (functional) | `this.state` (class) |
|------------------|-------------------------|----------------------|
| Component type   | Functional              | Class                |
| Code style       | Simple & clean          | More boilerplate     |
| Modern React     | ✅ Yes                  | ❌ No                 |
| Usage today      | Common                  | Rare                 |

## Important rule
- ❌ Do **not** modify state directly: `count = count + 1;` (no re-render)
- ✅ Always use the setter: `setCount(count + 1);`

### Takeaways
- State holds data that can change over time.
- `useState` is the modern, recommended approach.
- `this.state` is legacy and mainly appears in older class components.
- Updating state via the provided setter triggers a re-render.
