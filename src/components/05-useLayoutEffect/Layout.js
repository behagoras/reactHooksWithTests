import React, { useEffect, useState } from 'react'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

export default function Layout() {
  const baseUrl = 'https://www.breakingbadapi.com/api'

  const [
    counter,
    increment,
    decrement,
    reset,
  ] = useCounter(1, 1)
  const [quoteUrl, setQuoteUrl] = useState(`${baseUrl}/quotes/${counter}`)
  const state = useFetch(quoteUrl)

  const {
    data = [],
    error,
    // loading,
  } = state

  useEffect(() => { setQuoteUrl(`${baseUrl}/quotes/${counter}`) }, [counter])

  return (
    <>
      <h1>Layout Effect</h1>
      <hr />
      {data?.map((quote) => (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote?.quote}</p>
          <footer className="blockquote-footer">{quote?.author}</footer>
        </blockquote>
      ))}
      <div className="buttons text-right">
        <button
          disabled={counter <= 1}
          type="button"
          className="btn btn-primary "
          onClick={counter > 1 && decrement}
        >
          {'<'}
        </button>
        <button
          type="button"
          className="btn "
          onClick={reset}
        >
          Reset
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={increment}
        >
          {'>'}
        </button>
      </div>
      {error && <pre>{JSON.stringify(error, 0, 1)}</pre>}
    </>
  )
}

