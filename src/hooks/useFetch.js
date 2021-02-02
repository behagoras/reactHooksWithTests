import { useEffect, useRef, useState } from 'react'

export default function useFetch(url, options = {}) {
  const isMounted = useRef(true)
  const [state, setState] = useState({ data: null, loading: true, error: null })
  const endError = (error) => isMounted.current && setState({ data: null, loading: false, error })
  const setLoading = (bool) => isMounted.current && setState({ ...state, loading: bool })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    setLoading(true)
    fetch(url, options)
      .then((result) => result.json())
      .then((data) => isMounted.current && setState({ ...state, loading: false, data }))
      .catch(endError)
  }, [url])

  return state
}
