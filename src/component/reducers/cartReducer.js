import { ADD_TO_CART, REMOVE_FROM_CART ,SAVE_SHIPPING_INFO } from "./constants/cartContants";

// const initialData = {
//     cartItems: [],
//     shipping_info: {}
// }

// const cartReducer = (state=initialData, action) => {
const cartReducer = (state={cartItems: [], shipping_info:{}}, action) => {
    switch(action.type){
        case ADD_TO_CART: 
            const item = action.payload
            const itemExists = state.cartItems.find(i=> i.product === item.product)
            if(itemExists){

                return ({...state,cartItems: state.cartItems.map(i=>i.product===item.product?item:i)})
            }
            else {
                return ({...state, cartItems:[...state.cartItems, item]})
            }
        
        case REMOVE_FROM_CART: 
            return {
                ...state, 
                cartItems: state.cartItems.filter(item=>item.product!==action.payload.product)
            }
            case SAVE_SHIPPING_INFO :
                return {
                    ...state,
                    shipping_info : action.payload.shipping_info
                }
            
            default:
                return state
    }
}

export default cartReducer