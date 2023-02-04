import React, { useEffect } from 'react';
import "./button.css"
import { useSelector } from 'react-redux';
import { productNameData } from '../../constants/productData';
import { useState } from 'react';
import { addToWishList } from '../../Redux/actions/actions';
import { useDispatch } from 'react-redux';
function Extracard(id) {

    let [currentData, setCurrentData] = useState({});
    let {wishList} = useSelector(state=>state);
    let dispatch = useDispatch();

    const getProductDetailsWithId = (id)=>{
         let result =  productNameData.filter((eachData)=>{
               if(eachData.id === id){
                return eachData;
               }
           })
           console.log(result[0]);
           setCurrentData(result[0]);
    }

    const handleAddToWishList = (id) =>{
        // console.log(wishList);
        // let result = wishList?.filter((eachProduct)=>{
        //     if(eachProduct.id === id){
        //         return eachProduct;
        //     }
        // })

        // if(result.length > 0){
        //     alert("Already Present in wish List")
        // }else{
        //     wishList.push(currentData);
        //     addToWishList(wishList);


        //     alert("Added to WishList")
        // }
       
        wishList.push(currentData);
            addToWishList(dispatch, wishList);


            alert("Added to WishList")
       

    }

    useEffect(()=>{
        console.log("working", id);
        getProductDetailsWithId(id);
    },[])

    return (
        <div className='extracard'>
            <button className='button-6' onClick={()=>handleAddToWishList(id)}>WISHLIST</button>
        </div>
        
    );
}

export default Extracard;