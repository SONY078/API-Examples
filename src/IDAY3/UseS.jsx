import { useState } from "react"

const UseS = () =>
{
    const [c,setC] = useState(0);
    return(
        <div>
            <h1>counter:{c}</h1>
        <button onClick={()=>setC(c+1)}>Click</button>
        </div>
    )
}
export default UseS;