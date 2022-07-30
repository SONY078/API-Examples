import { useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"
// import {format} from 'date-fns';
function StopWatch() {
    const [milliSeconds, setMilliSeconds] = useState(0)
    const [ticking, setTicking] = useState(false)
    // 1. Get the ref for the CURRENT INSTANCE of the component
    const interval = useRef()
    useEffect(() => {
      if (ticking) {
        // 2. Update the value via ".current"
        interval.current = setInterval(() => {
          setMilliSeconds((ms) => ms + 1)
        }, 1)
        return () => clearInterval(interval.current)
      } else {
        // 3. Access the value via ".current"
        interval.current && clearInterval(interval.current)
      }
    }, [ticking])
    return (
      <div>
        <h1>{(milliSeconds)}</h1>
        <button onClick={() => setTicking((c) => !c)}>
          {milliSeconds === 0 ? 'Start' : ticking ? 'Pause' : 'Resume'}
        </button>
      </div>
    )
  }
  export default StopWatch;