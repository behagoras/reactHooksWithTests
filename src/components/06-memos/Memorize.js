import React, { useState } from 'react'
import useGetCounter from '../../hooks/useCounter'
import Small from './Small'

export default function Memorize() {
  const [counter, increment] = useGetCounter()
  const [show, setShow] = useState(false)
  return (
    <div>
      <h1>
        {'Counter: '}
        <Small value={counter} />
      </h1>
      <button className="btn btn-primary" onClick={increment} type="button">+</button>
      <hr />
      <button type="button" className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        {'Toggle show: '}
        {JSON.stringify(show)}
      </button>
    </div>
  )
}
