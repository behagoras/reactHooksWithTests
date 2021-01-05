import React, { useEffect, useState } from 'react'

export default function Message() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('<Message /> mounted')
    return () => {
      console.log('<Message /> unmounted')
    }
  }, [])

  useEffect(() => {
    const mouseMove = (e) => setCoords({ x: e.x, y: e.y })
    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <h2>{`Coordinates: ${JSON.stringify(coords)}`}</h2>
  )
}
