import axios from "axios"
import { API } from "../../../config"
import { NEW_ORDER_FAIL, NEW_ORDER_REQUEST, NEW_ORDER_SUCCESS, ORDER_DETAIL_FAIL, ORDER_DETAIL_REQUEST, ORDER_DETAIL_SUCCESS, USER_ORDER_FAIL, USER_ORDER_REQUEST, USER_ORDER_SUCCESS } from "../constants/orderConstants"

export const createOrder=(order, token)=> async(dispatch, getState) =>{
    try{
        dispatch({type:NEW_ORDER_REQUEST})

        // console.log(order)
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        // console.log(order)
        const {data} = await axios.post(`${API}/placeorder`,order, config)

        dispatch({
            type:NEW_ORDER_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:NEW_ORDER_FAIL,
            payload:error.error
        })
    }
}

export const userOrder=(user_id, token)=> async(dispatch, getState) =>{
    try{
        dispatch({type:USER_ORDER_REQUEST})

        // console.log(order)
        const config={
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        // console.log(order)
        const {data} = await axios.get(`${API}/userorder/${user_id}`, config)

        dispatch({
            type:USER_ORDER_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:USER_ORDER_FAIL,
            payload:error.error
        })
    }
}

export const orderDetail=(order_id, token)=> async(dispatch, getState) =>{
    try{
        dispatch({type:ORDER_DETAIL_REQUEST})

        // console.log(order)
        const config={
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        // console.log(order)
        const {data} = await axios.get(`${API}/orderdetails/${order_id}`, config)

        dispatch({
            type:ORDER_DETAIL_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:ORDER_DETAIL_FAIL,
            payload:error.error
        })
    }
}