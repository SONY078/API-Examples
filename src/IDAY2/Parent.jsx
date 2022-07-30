import React, { Component } from 'react'
import Child from './child'
export default class Parent extends Component {
  render() {
    return (
      <div>
        <h1>this is Parent Class</h1>
        <Child hcolor="blue" bg="red"/>
      </div>
    )
  }
}
