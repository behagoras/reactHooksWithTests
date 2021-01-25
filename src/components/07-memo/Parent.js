import React, { useState, useCallback } from 'react'
import Children from './Child'

const Parent = React.memo(() => {

  const numbers = [2, 4, 6, 8, 10]
  const [value, setValue] = useState(0)

  const increment = useCallback((num) => {
    setValue((v) => v + num)
  }, [setValue])

  return (
    <div>
      <h1>Parent</h1>
      <p>
        {`Total: ${value}`}
      </p>
      <hr />
      {
        numbers.map((n) => (
          <Children
            key={n}
            number={n}
            increment={increment}
          />
        ))
      }
      {/* <Children /> */}
    </div>
  )
})

export default Parent
