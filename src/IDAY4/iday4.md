1.What are React Life cycles Explain each one with  Example			
Answer:
Initialization:
---------------
This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
Mounting:
---------
Mounting is the stage of rendering the JSX returned by the render method itself.
Updating: 
----------
Updating is the stage when the state of a component is updated and the application is repainted.
Unmounting: 
-----------
As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.

2.What is UseReducer Hook ?(Implementation)	
Answer:
Syntax:
(  const [state, dispatch] = useReducer(reducer, initialArg, init);  )
An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

3.What is UseMemo Hook ?(Implementation)	
Answer:
The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example, we have an expensive function that runs on every render.


4.What is UseRef Hook ?(Implementation)
Answer:
The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.




5.What is Context api	
Answer:
The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

6.Difference between callback and useCallback Hook ?				
Answer:
useCallback HOOK:
The React useCallback Hook returns a memoized callback function. Think of memoization as caching a value so that it does not need to be recalculated. This allows us to isolate resource intensive functions so that they will not automatically run on every render.
useCallback is a react hook that returns a memorized callback when passed a function and a list of dependencies that set the parameters. It’s useful when a component is passing a callback to its child component in order to prevent rendering. It only changes the callback when one of its dependencies is changed.
CALLBACK:
A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.

7.What is Props Drilling Concept ?What is State Uplifting ?			
Answer:
Prop drilling is the unofficial term for passing data through several nested children components, in a bid to deliver this data to a deeply-nested component. The problem with this approach is that most of the components through which this data is passed have no actual need for this data.
STATE UPLIFTING:
When we update the Celsius input, the Fahrenheit input should reflect the converted temperature, and vice versa. In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.

8.Difference between useEffect and useContext ?		
Answer:
useEffect():
The useEffect() hook lets you perform side effects, or modification to some sort of state.This hook can be best thought of as componentDidMount(), componentDidUpdate(), and componentWillUnmount() all in one, which lets us hook into the life cycle method of functional components.
useContext():
The useContext() hook is used to create common data that can be easily shared amongst components without having to pass props manually to each level.
This can be instantiated by creating a context in a separate file using createContext()



