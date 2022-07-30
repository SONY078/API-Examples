import React from 'react'
import { useState } from 'react'

export default function EventExample()
{
    var [name,setName] = useState(false);
    const ex = () =>
    {
        name = "subha";
        setName(name);
    }
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={ex}>
            Click me</button>
    </div>
  )
}
