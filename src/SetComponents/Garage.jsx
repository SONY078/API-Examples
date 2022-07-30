import React from 'react'
// import Car from './Example1/Car';
export default function Garage() {
  return (
    <div>Garage
        <h1>Who lives in my garage?</h1>
        <form >
            <label>
              name:
              <input type='text' />
            </label>
        </form>
	    {/* <Car brand="Ford" /> */}
    </div>
  )
}
