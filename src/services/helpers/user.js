import apiUser from "../api/api.food";
import apiFood from "../api/api.food";


export const getAllUsers = () => {
    return apiUser.get(`users`)
}

export const getRoleUser = () => {
    return apiUser.get(`users`)
}

export const deleteUser = (id) => {
    return apiUser.delete(`user/${id}`)
}

export const setUserToAdmin = (data) => {
    return apiUser.put('/user/addRoleToUser',data)
}

