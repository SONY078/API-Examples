import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <h1>Child Component</h1>
        <h2 style={{color:this.props.hcolor}}>this is the data passing to parent</h2>
        <p style={{backgroundColor:this.props.bg}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ipsum culpa maiores excepturi tempora inventore autem ex harum dolores tenetur magni magnam repellat commodi enim nesciunt, vel voluptatum fuga mollitia!</p>
      </div>
    )
  }
}
