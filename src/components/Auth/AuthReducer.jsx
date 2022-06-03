import jwtDecode from 'jwt-decode'

export const initialAuth = {
  email: '',
  roles: [],
}

export const authReducer = (state, action) => {
  const decodedToken = action.token ? jwtDecode(action.token) : null
  switch (action.type) {
    case 'LOGIN':
      if (!action.token) return initialAuth
      return {
        email: decodedToken.sub,
        roles: decodedToken.roles,
      }
    case 'LOGOUT':
      return initialAuth
    default:
      return initialAuth
  }
}
