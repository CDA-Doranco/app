import apiAuthentification  from '../api/api.authentification'
import {BASE_URL_LOGIN} from "../../Constants";


//login du user avec ses identifiants
const authenticate = (email, password) => {
  const encodedUsernameKey = encodeURIComponent('username')
  const encodedUsernameValue = encodeURIComponent(email)
  const encodedPasswordKey = encodeURIComponent('password')
  const encodedPasswordValue = encodeURIComponent(password)

  const usernameBody = encodedUsernameKey + '=' + encodedUsernameValue
  const passwordBody = encodedPasswordKey + '=' + encodedPasswordValue
  const formBody = usernameBody + '&' + passwordBody
  return apiAuthentification.post(BASE_URL_LOGIN, formBody)
}
export default authenticate
