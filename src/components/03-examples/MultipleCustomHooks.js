import React, { useEffect, useState } from 'react'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

export default function MultipleCustomHooks() {
  const baseUrl = 'https://www.breakingbadapi.com/api'

  const [
    counter,
    increment,
    decrement,
    reset,
  ] = useCounter(1, 1)
  const [quoteUrl, setQuoteUrl] = useState(`${baseUrl}/quotes/${counter}`)
  const state = useFetch(quoteUrl)

  const { data = [], error, loading } = state

  useEffect(() => { setQuoteUrl(`${baseUrl}/quotes/${counter}`) }, [counter])

  return (
    <div>
      <h1>Breaking Bad characters</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">
          Loading...
        </div>
      ) :
        data && data.map((quote, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <blockquote className="blockquote text-right" key={index}>
            <p className="mb-0">{quote?.quote}</p>
            <footer className="blockquote-footer">{quote?.author}</footer>
          </blockquote>
        ))}
      {/* {data && <pre>{JSON.stringify(data, 0, 1)}</pre>} */}
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
    </div>
  )
}

