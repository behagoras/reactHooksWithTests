import React, { useMemo, useState } from 'react'
import useGetCounter from '../../hooks/useCounter'
import slowProcess from './utils/slowProcess'

export default function MemoHook() {
  const [counter, increment] = useGetCounter(1000)
  const [show, setShow] = useState(false)
  const slowProcessMemo = useMemo(() => slowProcess(counter), [counter])

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3><small>{counter}</small></h3>
      <button className="btn btn-primary" onClick={increment} type="button">+</button>
      <hr />
      <button type="button" className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        {'Toggle show: '}
        {JSON.stringify(show)}
      </button>
      <div>{slowProcessMemo}</div>
    </div>
  )
}
