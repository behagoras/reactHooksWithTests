import React from 'react'
import useCounter from '../../hooks/useCounter'

export default function CounterWithCustomHook() {
  const [counter1, increment1, decrement1, reset1] = useCounter()
  const [counter2, increment2, decrement2, reset2] = useCounter(100)
  return (
    <>
      <h1>{`Counter 1: ${counter1}`}</h1>
      <button type="button" className="btn" onClick={decrement1}> -1 </button>
      <button type="button" className="btn" onClick={reset1}> Reset </button>
      <button type="button" className="btn" onClick={increment1}> +1 </button>
      <hr />
      <h1>{`Counter 2: ${counter2}`}</h1>
      <button type="button" className="btn" onClick={() => decrement2(100)}> -1 </button>
      <button type="button" className="btn" onClick={reset2}> Reset </button>
      <button type="button" className="btn" onClick={() => increment2(100)}> +1 </button>
    </>
  )
}
