export const getCurrentProductCount = (cartData, id)=>{
    let count = 0;
    cartData?.map((eachProduct)=>{
        if(eachProduct?.id === id){
            count = eachProduct.count || 0;
        }
        return eachProduct;
    })
    return count;
}