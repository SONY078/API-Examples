import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function UseEffect() {
    const [count,setCount] = useState(0);
    useEffect(()=>
    {
        setTimeout(()=>
        {
            setCount((count)=>count+1);
        },60000)
    })
  return (
    <div>
        <h1>Counter:{count}</h1>
    </div>
  )
}
