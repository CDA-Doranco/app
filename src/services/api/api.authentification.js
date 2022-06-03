import * as axios from 'axios'
import {BASE_URL_LOGIN} from "../../Constants";

const apiAuthentification = axios.create({
  baseURL: BASE_URL_LOGIN,
})

apiAuthentification.interceptors.request.use((request) => {
  request.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
  request.headers['Access-Control-Allow-Origin'] = '*'
  return request
})

export default apiAuthentification
