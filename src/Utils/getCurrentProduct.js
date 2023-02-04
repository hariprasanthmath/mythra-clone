export const getCurrentProduct = (id, productData) => {

    let result = productData.filter((eachData)=>{
        if(eachData.id == id){
            return eachData;
        }
    })
    console.log(result);
    return result[0];
}