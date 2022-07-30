import React from "react";
// DAY 2																									
// 1.What is the Difference between react and react native? Which one is library or framework?	
// Answer
// React is a JavaScript library of reusable components designed to create skeletons of the apps, 
// whereas React Native is designed to build native mobile apps with reusable components.
// React Native is a JavaScript framework for writing real, natively rendering mobile 
// applications for iOS and Android. It's based on React, Facebook's JavaScript 
// library for building user interfaces, but instead of targeting the browser, it targets mobile platforms.

// 2.What is the package name you are using for routing		
// Answer
// React Router DOM is an npm package that enables you to implement dynamic routing in a web app. 
// It allows you to display pages and allow users to navigate them. 
// It is a fully-featured client and server-side routing library for React.

// 3.Routing Implementation			
// Answer
// https://codesandbox.io/s/xenodochial-babycat-973txz?file=/src/App.js:267-364

// 4.How do you pass data from parent to child	
// Answer
// https://codesandbox.io/s/xenodochial-babycat-973txz?file=/src/App.js:267-364
// React.js allows us to use props (short form of property) to pass data from parent component to child component. 
// We have to set props value inside the child component, while we embed it to the parent component.

// 5.What is lazy loading in react ?		
// Answer
// In essence, lazy loading means that a component or a part of code must get loaded when it is required. 
// It is also referred to as code splitting and data fetching . Talking about React specifically, 
// it bundles the complete code and deploys all of it at the same time

// 6.Difference b/w Stateful and stateless Component
// Answer
// In React, a stateful component is a component that holds some state. 
// Stateless components, by contrast, have no state. Note that both types of components can use props.
// ex:
class Store extends React.Component {
    constructor(props) {
      super(props);
      this.state = { sell: 'anything' };
    }
    render() {
      return <h1>I'm selling {this.state.sell}.</h1>;
    }
  }
//   class Week extends React.Component {
//     render() {
//       return <h1>Today is {this.props.day}!</h1>;
//     }
//   }

  export default Store;
 
  // In the example, there are two React components. 
// The Store component is stateful and the Week component is stateless.

