import { setDataToCart } from "../../Utils/setCartData"

const initialState = {
   
    cartData : [],
    wishList : []
}

export const productReducer = (state = initialState, action)=>{
    switch(action.type){
        
        
        case "ADDPRODUCTTOCART" : 
            return {
                ...state,
                cartData : setDataToCart(state.cartData, action.payload, true)
            }
        case "DECREASEFROMCART" : 
            return {
                ...state,
                cartData : setDataToCart(state.cartData, action.payload, false)
            }
        
        case "REMOVECARTDATA" : 
            return {
                ...state,
                cartData : []
            }
        
        default : 
         return state;
    }
}