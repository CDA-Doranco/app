
import  authenticate  from '../../services/helpers/authentification'


function setAuthenticatedUser(token) {
  sessionStorage.setItem('accessToken', token)
}
function useAuth() {

  return {
    login(email, password) {
      return new Promise((resolve, reject) => {
        //try sur le login du user (validation des identifiants de connexion saisis)
        authenticate(email, password)
          .then((response) => response.data)
          .then((data) => {
            if (data) {
              setAuthenticatedUser(data.accessToken)

              resolve()
            } else {

              reject()
            }
          })
          .catch(() => {
            reject()
          })
      })
    },
    logout() {
      return new Promise(() => {
        sessionStorage.clear()
      })
    },
  }
}

export default useAuth
