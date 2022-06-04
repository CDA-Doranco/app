//export const BASE_URL_API= "http://localhost:8080/api";
//export const BASE_URL_LOGIN = 'http://localhost:8080/login'


//export const BASE_URL_API= "https://api-cda-2022.herokuapp.com/api";
//export const BASE_URL_LOGIN= "httpsnpm start://api-cda-2022.herokuapp.com/login";

export const BASE_URL_API= process.env.REACT_APP_API+"/api";
export const BASE_URL_LOGIN= process.env.REACT_APP_API+"/login";
