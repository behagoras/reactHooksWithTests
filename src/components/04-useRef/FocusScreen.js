import React, { useRef } from 'react'

export default function FocusScreen() {
  const inputRef = useRef()
  const handleFocusClick = () => {
    inputRef.current.select()
  }
  return (
    <div>
      <h1>Focus screen</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="your name"
        ref={inputRef}
      />
      <button
        type="button"
        className="btn btn-outline-primary mt-5"
        onClick={handleFocusClick}
      >
        Focus
      </button>
    </div>
  )
}
