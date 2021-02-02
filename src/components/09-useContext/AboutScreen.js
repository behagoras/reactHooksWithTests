import React from 'react'
import { useUserContext } from './UserContext'

export default function AboutScreen() {
  const { user, setUser } = useUserContext()
  const handleLogout = (e) => {
    setUser({})
  }
  return (
    <div>
      <h1>About Screen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button type="button" className="btn btn-warning" onClick={handleLogout}>Log out</button>
    </div>
  )
}
