import { useEffect, useState } from 'react'

export default function useFetch(url, options = {}) {
  const [state, setState] = useState({ data: null, loading: true, error: null })
  const endError = (error) => setState({ ...state, loading: false, error })
  const setLoading = (bool) => setState({ ...state, loading: bool })

  useEffect(() => {
    setLoading(true)
    fetch(url, options)
      .then((result) => result.json())
      .then((data) => setState({ ...state, loading: false, data }))
      .catch(endError)
    return () => {
    }
  }, [url])

  return state
}
