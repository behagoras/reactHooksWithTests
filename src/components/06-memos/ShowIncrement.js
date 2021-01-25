import React from 'react'

const ShowIncrement = React.memo(({ increment }) => {

  console.log(' Re-rendered :( ')

  return (
    <button
      className="btn btn-primary"
      type="button"
      onClick={() => { increment(5) }}
    >
      Increment
    </button>
  )
})
export default ShowIncrement
