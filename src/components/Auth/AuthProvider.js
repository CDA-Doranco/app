import { authReducer, initialAuth } from './AuthReducer'
import jwtDecode from 'jwt-decode'
import * as React from 'react'
import { useReducer } from 'react'

export const authContext = React.createContext()

export default function AuthProvider({ children }: { children: JSX.Element }) {
  const [state, dispatch] = useReducer(authReducer, initialAuth, () => {
    const token = sessionStorage.getItem('accessToken')
    try {
      const decodedToken = jwtDecode(token)
      const isTokenExpired = decodedToken.exp * 1000 < Date.now()
      if (isTokenExpired) {
        return initialAuth
      }
      return {
        email: decodedToken.sub,
        roles: decodedToken.roles,
      }
    } catch (exception) {
      return initialAuth
    }
  })

  return <authContext.Provider value={{ user: state, dispatch }}>{children}</authContext.Provider>
}
