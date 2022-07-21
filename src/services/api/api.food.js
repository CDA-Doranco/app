import * as axios from 'axios'
import {BASE_URL_API} from "../../Constants";

const apiFood = axios.create({
    baseURL: BASE_URL_API,
})

apiFood.interceptors.request.use((request) => {
    request.headers['Accept'] = 'application/json'
    request.headers['Content-Type'] = 'application/json'
    request.headers['Access-Control-Allow-Origin'] = '*'
    if (sessionStorage.getItem('accessToken') != null && sessionStorage.getItem('accessToken') !== "undefined") {
        request.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('accessToken')
    }
    return request

})

export default apiFood
