import { authContext } from './AuthProvider'
import jwtDecode from 'jwt-decode'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation()
  const { user, dispatch } = useContext(authContext)
  const { email } = user
  const [pathname, setPathname] = useState('')

  // Modification de l'URL actuelle stocké dans le state
  useEffect(() => {
    setPathname(location.pathname)
  }, [location])

  // Vérification de la validité du token à chaque changement d'URL
  useEffect(() => {
    const token = sessionStorage.getItem('accessToken')
    if (token) {
      try {
        const decodedToken = jwtDecode(token)
        if (decodedToken.exp * 1000 < Date.now()) {
          dispatch({
            action: 'LOGOUT',
          })
        }
      } catch (e) {
        dispatch({
          action: 'LOGOUT',
        })
      }
    }
  }, [pathname])

  const authorized = useMemo(() => !!email, [email])
  return authorized ? children : <Redirect to='/login' replace state={{ path: location.pathname }} />
}
export default RequireAuth
