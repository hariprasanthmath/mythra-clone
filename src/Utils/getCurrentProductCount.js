export const getCurrentProductCount = (cartData, id)=>{
 
   let data = cartData?.filter((eachProduct)=>{
        if(eachProduct?.id == id){
            return eachProduct;
        }
        
    })
    console.log(data);
    if(data.length ===0 ){
        return 0;
    }else{
        return data[0].count;
    }
   
}