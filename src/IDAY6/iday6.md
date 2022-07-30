DAY 6	
--------

1.What is an event in react?	
=>Answer:

An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.

React has its own event handling system which is very similar to handling events on DOM elements. The react event handling system is known as Synthetic Events. The synthetic event is a cross-browser wrapper of the browser's native event.
Handling events with react have some syntactic differences from handling events on DOM. These are:
React events are named as camelCase instead of lowercase.
With JSX, a function is passed as the event handler instead of a string.

2.What is memory leak and how to overcome?			
=>Answer:

Memory leak occurs when programmers create a memory in heap and forget to delete it. The consequences of memory leak is that it reduces the performance of the computer by reducing the amount of available memory
A memory leak is the gradual deterioration of system performance that occurs over time as the result of the fragmentation of a computer's RAM due to poorly designed or programmed applications that fail to free up memory segments when they are no longer needed.

3.Do you prefer function-based or class component and why ?	
=>Answer:

A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).	A class component requires you to extend from React. Component and create a render function which returns a React element.

When should I use functional components vs class components?
To allocate state into a class component, you need to have defined a constructor, which then assigns the initial state. The props are passed into the base constructor. Functional components are used when the components have from zero to minimal state management.
Functional component are much easier to read and test because they are plain JavaScript functions without state or lifecycle-hooks. You end up with less code. They help you to use best practices.
It is generally believed that functional components are faster than class components, and the React team has been promising optimizations to functional components.

4.Explain reducer as pure function in redux		
=>Answer:

In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action
Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state objects, instead of mutating the previous state.

5.Why do we use redux thunk?	
=>Answer:

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the function's body once the asynchronous operations have been completed.

6.What do you know about NPM?		
=>Answer:

npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.
npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently. It is extremely configurable to support a wide variety of use cases. Most commonly, it is used to publish, discover, install, and develop node programs.
