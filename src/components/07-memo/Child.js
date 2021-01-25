import React from 'react'

const Child = React.memo(({ number, increment }) => {
  console.log('Re-rendered :(')
  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => increment(number)}
      type="button"
    >
      { number }
    </button>
  )
})
export default Child
