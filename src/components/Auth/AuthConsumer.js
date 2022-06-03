import * as React from 'react'

export default function AuthConsumer() {
  const authContext = React.createContext()
  return React.useContext(authContext)
}
