import { API } from "../../config"

export const userRegister = (user_name, email, password) => {
    const user = {user_name, email, password}
    return fetch(`${API}/register`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const confirmUser = (token) => {
    return fetch(`${API}/verification/${token}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const signin = (email, password) => {
    const user = {email, password}
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const authenticate = (data, next) => {
    localStorage.setItem('jwt',JSON.stringify(data))
    next()
}

export const isAuthenticated = () => {
    return localStorage.getItem('jwt')? JSON.parse(localStorage.getItem('jwt')): false
}

export const signout = () => {
    localStorage.removeItem('jwt')
    return fetch(`${API}/signout`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const forgetPassword = (email) => {
   return fetch(`${API}/forgetpassword`,{
       method:"POST",
       headers:{
        Accept: "application/json",
        "Content-Type":"application/json"
    },
    body:JSON.stringify({email})
   })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const resetPassword = (password, token) => {
    return fetch(`${API}/resetpassword/${token}`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({password})
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}
