import { useState } from 'react'

export default function useGetCounter(defaultValue = 0, defaultFactor = 1) {
  const [counter, setCounter] = useState(defaultValue)
  const increment = (factor = defaultFactor) => setCounter(counter + factor)
  const decrement = (factor = defaultFactor) => setCounter(counter - factor)
  const reset = () => setCounter(defaultValue)
  return [counter, increment, decrement, reset]
}
