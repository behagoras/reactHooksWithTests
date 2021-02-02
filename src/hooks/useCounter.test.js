import { renderHook, act } from '@testing-library/react-hooks'
import useGetCounter from './useCounter'

describe('useCounter hook', () => {
  it('should return default values', () => {
    const { result } = renderHook(() => useGetCounter())
    const [counter, increment, decrement, reset] = result.current
    expect(counter).toBe(0)
    expect(typeof increment).toBe('function')
    expect(typeof decrement).toBe('function')
    expect(typeof reset).toBe('function')
  })

  it('should initialize correctly the counter', () => {
    const initialValue = 10
    const { result } = renderHook(() => useGetCounter(initialValue))
    const [counter] = result.current
    expect(counter).toBe(initialValue)
  })

  it('should increment the counter by 1 (default increment factor)', () => {
    const { result } = renderHook(() => useGetCounter())
    const [, increment] = result.current
    act(() => {
      increment()
    })
    const [counter] = result.current
    expect(counter).toBe(1)
  })

  it('should decrement the counter by 1 (default increment factor)', () => {
    const { result } = renderHook(() => useGetCounter())
    const [, , decrement] = result.current
    act(() => {
      decrement()
    })
    const [counter] = result.current
    expect(counter).toBe(-1)
  })
  it('should reset the counter', () => {
    const { result } = renderHook(() => useGetCounter())
    const [, increment,, reset] = result.current
    act(() => {
      increment()
    })
    let [counter] = result.current
    expect(counter).toBe(1)
    act(() => {
      reset()
    });
    [counter] = result.current
    expect(counter).toBe(0)
  })
})
