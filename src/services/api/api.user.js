import * as axios from 'axios'
import {BASE_URL_API} from "../../Constants";

const apiUser = axios.create({
    baseURL: BASE_URL_API,
})

apiUser.interceptors.request.use((request) => {
    request.headers['Accept'] = 'application/json'
    request.headers['Content-Type'] = 'application/json'
    request.headers['Access-Control-Allow-Origin'] = '*'
    if (sessionStorage.getItem('accessToken') != null && sessionStorage.getItem('accessToken') !== "undefined") {
        console.log(sessionStorage.getItem('accessToken'))
        request.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('accessToken')
    }
    return request
})

export default apiUser
