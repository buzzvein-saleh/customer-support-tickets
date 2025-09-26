Q- What is JSX, and why is it used?
A- JSX (JavaScript XML) is a syntax extension for JavaScript used in React.
It allows developers to write HTML-like code directly inside JavaScript.
JSX makes UI code more readable and easier to visualize. Behind the scenes,
it gets compiled into React createElement() calls.

Q- What is the difference between State and Props?
A- Props are used to pass data from a parent component to a child component.
They are read-only and cannot be modified by the receiving component.
State, on the other hand, is managed within a component itself.
It is mutable and used to handle dynamic data and UI updates.

Q- What is the useState hook, and how does it work?
A - The useState hook is a React function for adding state to functional components.
It returns an array with two values: the current state and a function to update it.
When the update function is called, React re-renders the component.
This makes it easy to manage dynamic data like form inputs or toggles.

Q- How can you share state between components in React?
A - We can share state by lifting it up to the nearest common parent component.
The parent holds the state and passes it down as props to its children.
For complex apps, state can be shared using Context API.
Alternatively, external libraries like Redux or Zustand can manage global state.

Q- How is event handling done in React?
A- Event handling in React is done using camelCase syntax, like onClick.
You pass a function as the event handler instead of a string.
React events are wrapped in a synthetic event system for cross-browser support.
This ensures consistent behavior across different environments.
