// import  ReactDOM from 'react-dom'
import React, { Component } from 'react'

export default class LifeCycle extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            name : "Life Cycle"
        };
    }
    Change()
    {
        this.setState({name:"react life cycle"})
    }
    componentDidMount()
    {
        console.log("Component did mount");
    }
    componentDidUpdate()
    {
        console.log("component did update");
    }
    componentWillUnmount()
    {
        console.log("component will unmount")
    }

  render() {
    return (
      <div>
        <h1>Component {this.state.name}</h1>
        <button onClick={this.Change.bind(this)} style={{border:"none"}}>Press here!!</button>
      </div>
    )
  }
}
