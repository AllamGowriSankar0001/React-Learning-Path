# Handling Forms in React

Forms in React need special handling because HTML forms have default behavior that doesn't play nice with single-page applications. By default, when you submit a form, the browser tries to send the data to a server and reload the page. That's exactly what we don't want in React apps - we want to handle everything in JavaScript and keep the page smooth.

## onSubmit - put it on the form, not the button

The `onSubmit` event fires when:
- You click a submit button
- You press Enter inside an input field

And here's the key thing - put `onSubmit` on the `<form>` element, not on the button itself:

```jsx
<form onSubmit={handleSubmit}>
```

Why is this better than putting onClick on the button?
- It works when users press Enter (accessibility!)
- It's the proper semantic way to handle forms
- You have one central place to handle submission
- Works better with multiple submit buttons if you have them

## preventDefault() - stop the browser from reloading

Inside your submit handler, you absolutely must call `e.preventDefault()` to stop the browser's default form submission behavior:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  // Now you can handle the form data yourself
}
```

Without `preventDefault()`:
- The page reloads (bye bye React state)
- Your JavaScript state gets wiped out
- Your UI breaks
- You lose the single-page app experience

It's called "preventDefault" because you're preventing the default browser behavior. Make sure you spell it exactly right - a typo like `preventdefaults()` won't work and React will warn you.

## The basic React form pattern

Here's the standard way to handle a form in React:

```jsx
function Form() {
  const [name, setName] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    // Do something with the form data
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

Notice a few things:
- We're using controlled inputs (value + onChange)
- onSubmit is on the form element
- preventDefault stops the page reload
- We handle the data in JavaScript

## Why onSubmit beats onClick

Don't do this:

```jsx
<button onClick={handleSubmit}>Submit</button>
```

Problems with onClick:
- Enter key doesn't work (bad UX)
- Accessibility issues
- Doesn't follow form semantics
- Can cause bugs with multiple buttons

Do this instead:

```jsx
<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

Much better. The form element is designed to handle submission, so let it do its job.

## Common mistakes to avoid

### Forgetting preventDefault

This is the number one mistake. If you forget it, the page will reload and you'll lose all your React state. Always add `e.preventDefault()` at the start of your submit handler.

### Controlled input without onChange

```jsx
<input value={name} /> // ❌ This becomes read-only
```

If you use `value` on an input, you MUST provide `onChange`. Otherwise React makes the input read-only because it's controlling the value. React will warn you about this in the console.

### Using onClick instead of onSubmit

I mentioned this above, but it's worth repeating. onClick on a button feels simpler, but it breaks the expected form behavior. Use onSubmit on the form element.

## What happens step by step

When a user submits a form:
1. User clicks submit or presses Enter
2. `onSubmit` event fires on the form
3. Your `handleSubmit` function runs
4. `preventDefault()` stops the browser from reloading
5. You handle the form data in JavaScript (validate, send to API, update state, etc.)
6. The UI updates based on your React state

The whole point is that React takes control of the form submission process instead of letting the browser handle it the old-school way.

## The one-sentence summary

`onSubmit` handles the form event, and `preventDefault` stops the browser from doing its default thing so React can take over and handle everything in JavaScript.
