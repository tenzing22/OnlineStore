import { API } from "../../config"

export const addCategory = (token, category_name) => {
    return fetch(`${API}/postcategory`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ category_name })
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const viewCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const categoryDetails = (category_id) => {
    return fetch(`${API}/findcategory/${category_id}`, {
        method: "GET"
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const updateCategory = (id, category_name, token) => {
    return fetch(`${API}/updatecategory/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ category_name })
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const deleteCategory = (id, token) => {
    return fetch(`${API}/deletecategory/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const filterProduct = (sortBy , order , limit ,skip ,filters)=>{
    return fetch(`${API}/filterproduct?sortBy=${sortBy}&order=${order}&limit=${limit}&skip=${skip}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type" :"application/json"
        },
        body:JSON.stringify(filters)
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}