import React from 'react'

function KeyExample() {
    const numbers = [ 1, 2, 3, 4, 5 ];

const updatedNums = numbers.map((index,number)=>{
return <li key={index}>{number} </li>;
});
  return (
    <div>
        <h1>{updatedNums}</h1>

    </div>
  )
}
export default KeyExample;

