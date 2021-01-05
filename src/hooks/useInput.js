import { useState, useEffect } from 'react'

export default function useInput() {
  const [state, setState] = useState('')
  useEffect(() => {
  }, [])
  const handleInputChange = (e) => setState(e.target.value)
  return [state, handleInputChange]
}
