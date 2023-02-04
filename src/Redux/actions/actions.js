

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

export const setPage = (dispatch)=>{
    dispatch({
        type:"SETPAGE"
    })
}

export const setCurrentProduct = (dispatch, data) =>{
    dispatch({
        type: "SETPRODUCT",
        payload : data
    })
}
export const setBrandState = (dispatch, data) =>{
    dispatch({
        type : "SETBRANDFILTER",
        payload : data
    })
}
export const setCategory = (dispatch, data)=>{
    dispatch({
        type: "SETCATEGORYFILTER",
        payload : data
    })
}
export const setGender = (dispatch, data)=>{
    dispatch({
        type : "SETGENDERFILTER",
        payload : data
    })
}