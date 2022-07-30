import React, { useRef } from "react";
import { useEffect } from "react";

const RenderCounter = () => {
  const counter = useRef(0);
  
  useEffect(()=>
  {
    // Since the ref value is updated in the render phase,
  // the value can be incremented more than once
  counter.current = counter.current + 1;
  })
  
  return (
    <h1>{`The component has been re-rendered ${counter} times`}</h1>
  );
};
export default RenderCounter;