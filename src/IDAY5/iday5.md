1.High Order Component in react js ?
Answer:
A higher-order component (HOC) is an advanced technique in React for reusing component logic. 
A higher-order component is a function that takes a component and returns a new component. A higher-order component (HOC) is the advanced technique in React.js for reusing a component logic. Higher-Order Components are not part of the React API. They are the pattern that emerges from React’s compositional nature. The component transforms props into UI, and a higher-order component converts a component into another component. The examples of HOCs are Redux’s connect and Relay’s createContainer.

2.Do you know about SEO ? Is it true that react js supports SEO support
Answer:
 SEO - Search Engine Optimization
SEO means Search Engine Optimization and is the process used to optimize a website's technical configuration, content relevance and link popularity so its pages can become easily findable, more relevant and popular towards user search queries, and as a consequence, search engines rank them better.
React helps build a very user-friendly UI that is also valuable by SEO, so you definitely shouldn't avoid it while creating a user interface for your app/website. However, you should use some tricks to ensure that your React-site is understandable for Google crawlers and, therefore, good for SEO.

3.clean up in useEffect
Answer:
the useEffect cleanup is a function in the useEffect Hook that allows us to tidy up our code before our component unmounts. When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.

4.What is the use of useCallback and useMemo
Answer:
The useCallback hook is used when you have a component in which the child is rerendering again and again without need. Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.

The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example, we have an expensive function that runs on every render.

5.Why do we need keys in react less
Answer:
When working with any type of list in React, you will often encounter this warning if you forgot to include a key prop:
Warning: Each child in a list should have a unique "key" prop
Keys help React identify which items have changed (added/removed/re-ordered). To give a unique identity to every element inside the array, a key is required.
React recommends that you do not use indexes as keys, since it could impact performance negatively and could lead to some unstable component behaviour.


6.Do you know about redux
Answer:
Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React
The main reason to use React Redux are: React Redux is the official UI bindings for react Application. It is kept up-to-date with any API changes to ensure that your React components behave as expected. It encourages good 'React' architecture