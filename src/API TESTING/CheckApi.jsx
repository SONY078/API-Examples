import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function CheckApi() 
{
    const [data,setData] = useState([]);
    useEffect(()=>
    {
        fetch(`https://api.github.com/users`).then(res => res.json()).then(data => setData(data))

    },[])
  return (
    <div>
        <h1>Images</h1>
        {
          data.map((i)=>(<img src={i.avatar_url} alt=""/>))
        }
    </div>
  )
}
