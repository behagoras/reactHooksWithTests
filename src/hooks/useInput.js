import { useState, useEffect } from 'react'

export default function useInput(initialValue = '') {
  const [state, setState] = useState(initialValue)
  useEffect(() => {
  }, [])
  const handleInputChange = (e) => setState(e.target.value)
  const reset = () => setState(initialValue)
  return [state, handleInputChange, reset]
}
