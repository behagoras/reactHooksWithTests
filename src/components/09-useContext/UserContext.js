import React, { useContext, useState } from 'react'

export const useInitialUser = () => {
  const [user, setUser] = useState({
    id: 1234,
    name: 'David',
    email: 'email@gmail.com',
  })
  return { user, setUser }
}
export const UserContext = React.createContext({
  user: { id: 1, name: '', email: '' },
  setUser: () => {},
})

export const useUserContext = () => useContext(UserContext)
export default UserContext
