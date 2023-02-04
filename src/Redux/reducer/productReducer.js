import { setDataToCart } from "../../Utils/setCartData"

const initialState = {
   
    cartData : [],
    wishList : [],
    currentPage : true,
    currentProduct : 1,
    brandFilter : [],
    categoryFilter : [],
    OfferFilter : [],
    genderFilter : []
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
        case  "SETBRANDFILTER" :
         return {
            ...state,
            brandFilter : action.payload
         }
        case "SETCATEGORYFILTER" : 
        return {
            ...state,
            categoryFilter : action.payload
        }
        case "SETGENDERFILTER" :
            return {
                ...state,
                genderFilter : action.payload
            }
        case "RESETFILTERS" : 
        return {
            ...state,
            brandFilter : [],
            categoryFilter : []
        }
        case "ADDTOWISHLIST" : 
        return {
            ...state,
            wishList : action.payload
        }
        
        
        default : 
         return state;
    }
}