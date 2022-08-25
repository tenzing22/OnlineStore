import { NEW_ORDER_FAIL, NEW_ORDER_REQUEST, NEW_ORDER_SUCCESS, ORDER_DETAIL_FAIL, ORDER_DETAIL_REQUEST, ORDER_DETAIL_SUCCESS, USER_ORDER_FAIL, USER_ORDER_REQUEST, USER_ORDER_SUCCESS } from "./constants/orderConstants";

export const newOrderReducer = (state={}, action) => {
    switch(action.type){
        case NEW_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case NEW_ORDER_SUCCESS:
            return {
                loading: false,
                // order: action.payload
            }
        case NEW_ORDER_FAIL:
            return {
                loading: false,
                // error: action.payload
            }

        default:
            return state
    }
}

export const userOrderReducer = (state=[], action) => {
    switch(action.type){
        case USER_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_ORDER_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }
        case USER_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const OrderDetailReducer = (state={}, action) => {
    switch(action.type){
        case ORDER_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ORDER_DETAIL_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }
        case ORDER_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}