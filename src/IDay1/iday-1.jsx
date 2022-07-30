import React from "react";
{/*
DAY 1
------------
1.What is Virtual DOM
Answer:
The virtual DOM (VDOM) is a programming concept where an ideal, 
or “virtual”, representation of a UI is kept in memory and synced 
with the “real” DOM by a library such as ReactDOM. 
This process is called reconciliation.
we need VDOM whenever,once you start performing continous mutations, 
more complexity arises. This is why the virtual DOM was created - to 
allow you to write declarative content (like the string in the innerHTML example) while 
harnessing performance by making only pinpoint changes to the DOM.

2.What is SPA
Answer:
SPA stands for Single Page Application. It is a very common way of 
programming websites these days. The idea is that the website loads 
all the HTML/JS the first time you visit. When you then navigate, the browser 
will only rerender the content without refreshing the website.

3.What is difference between class and functional component
Answer:
A functional component is just a plain JavaScript pure function 
that accepts props as an argument and returns a React element(JSX). 
A class component requires you to extend from React. Component and 
create a render function which returns a React element.
Functional Components: 
----------------------
Functional components are some of the more 
common components that will come across while working in React. 
These are simply JavaScript functions. We can create a 
functional component to React by writing a JavaScript function.
Syntax:
datatype functionname = () =>
{
    --statements--
    return(
        <>
        --statements/html/css--
        </>
    )
}
Ex:

const Hello = () =>
{
    return(
        <h1>Hello</h1>
    )
}


Class Component:
-----------------
This is the bread and butter of most modern web apps built in 
ReactJS. These components are simple classes 
(made up of multiple functions that add functionality to the application).

syntax:
class classname etends Component
{
    render()
    {
        return(
            --html elements--
        )
    }
      
}
ex:
*/}
class Hello extends React.Component
{
    render()
    {
        return(
            <h1>Hello</h1>
        )
    }
}
{/*
4.What does mean by state and its use in react?
answer:
The state is a built-in React object that is used to contain 
data or information about the component. A component's state 
can change over time; whenever it changes, 
the component re-renders.
Ex:
*/}
class Greetings extends React.Component {

  state = {

    name: "Leonardo da Vinci",
    Invention : "Polymath",
    fame : "Artist"

  };

  updateName() {

    this.setState({ name: "Simplilearn" });

  }

  render() {

      return(

          <div>
            <h1>Scientist -  {this.state.name}</h1>
            <h2>Inventions:{this.state.Invention}</h2>
            <h2>Famous as:{this.state.fame}</h2>
          </div>

      )

  }

}
export default Greetings;
{/*
5.What is JSX and why do we use it instead of js?
Answer:
JSX stands for JavaScript XML. JSX allows us to write HTML in React. 
JSX makes it easier to write and add HTML in React.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any 
createElement() and/or appendChild() methods. JSX converts HTML tags into react elements. 
You are not required to use JSX, but JSX makes it easier to write React applications.
Ex:
iday-1.jsx

6.What is package.json
Answer:


*/}
