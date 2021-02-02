import React from 'react'
import { useUserContext } from './UserContext'

export default function HomeScreen() {
  const { user } = useUserContext()
  return (
    <div>
      <h1>Home Screen</h1>
      {user?.name}
      <hr />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
