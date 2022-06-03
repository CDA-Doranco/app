import apiFood from "../api/api.food";
import apiUser from "../api/api.food";

export const getAllFoods = () => {
    return apiFood.get(`food`)
}

export const getAllCategories = () => {
    return apiFood.get(`categorys`)
}
export const deleteFood = (id) => {
    return apiFood.delete(`food/${id}`)
}
export const saveFood = (data) => {
    return apiFood.post(`food`,data)
}
export const updateFood = (data) => {
    return apiFood.put(`food`,data)
}
export const getFoodById = (id) => {
    return apiFood.get(`food/${id}`)
}

export const getFoodByCategory = (category) => {
    return apiFood.get(`food/category/${category}`)
}

export const addOrder = (data) => {
    return apiFood.post(`order`,data)
}

export const getUserOrders = (userId) => {
    return apiFood.get(`order/user/${userId}`)
}
export const getOrderById = (id) => {
    return apiFood.get(`order/${id}`)
}
export const getOrders = () => {
    return apiFood.get(`order`)
}

export const getCommandById = (id) => {
    return apiFood.get(`command/${id}`)
}
export const getUserCommands = () => {
    return apiFood.get(`command`)
}

export const registration = (data) => {
    return apiFood.post(`user/save`,data)
}
