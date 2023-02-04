import { setDataToCart } from "../../Utils/setCartData"

const initialState = {
   
    cartData : [],
    wishList : [],
    currentPage : true,
    currentProduct : 1
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
        case "SETPAGE" : 
        return {
            ...state,
            currentPage : !state.currentPage
        }

        case "SETPRODUCT":
            return {
                ...state,
                currentProduct : action.payload
            }
        
        default : 
         return state;
    }
}