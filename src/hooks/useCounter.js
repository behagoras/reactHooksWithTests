import { useState } from 'react'

export default function useGetCounter(defaultValue = 0, factor = 1) {
  const [counter, setCounter] = useState(defaultValue)
  const increment = () => setCounter(counter + factor)
  const decrement = () => setCounter(counter - factor)
  const reset = () => setCounter(defaultValue)
  return [counter, increment, decrement, reset]
}
