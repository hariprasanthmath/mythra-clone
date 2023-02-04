

export const addProductToCart = (dispatch, data) =>{
dispatch({
  type: "ADDPRODUCTTOCART",
  payload : data
})
}

export const decreaseProductCountFromCart = (dispatch, data) =>{
 dispatch({
  type : "DECREASEFROMCART",
  payload : data
 })
}

export const removeCartData = (dispatch)=>{
dispatch({
  type:"REMOVECARTDATA",
  
})
}
