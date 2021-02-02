import { renderHook, act } from '@testing-library/react-hooks'
import useFetch from './useFetch'

describe('useFetch hook', () => {
  it('should return an empty value before resolving the promise', () => {
    const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))
    const { data, loading, error } = result.current
    expect(data).toBe(null)
    expect(loading).toBe(true)
    expect(error).toBe(null)
  })
  it('should  return data', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))
    await waitForNextUpdate()
    const { data, loading, error } = result.current
    expect(data.length).toBe(1)
    expect(loading).toBe(false)
    expect(error).toBe(null)
  })
  it('should catch the correct error', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotas/1'))
    await waitForNextUpdate()
    const { data, loading, error } = result.current
    expect(data).toBe(null)
    expect(loading).toBe(false)
    expect(error).not.toBe(null)
  })
})
