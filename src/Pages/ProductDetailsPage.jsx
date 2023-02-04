import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { productNameData } from '../constants/productData';
import { getCurrentProduct } from '../Utils/getCurrentProduct';
import { useEffect } from 'react';
import "./productdetails.css"
import { calculateOffer } from '../Utils/calculateOffer';
import { useSelector } from 'react-redux';
import { addProductToCart } from '../Redux/actions/actions';
import { useDispatch } from 'react-redux';
import { getCurrentProductCount } from '../Utils/getCurrentProductCount';
import { setPage } from '../Redux/actions/actions';
import "../Components/ProductCard/button.css"
function ProductDetailsPage(props) {
    // image2, image3, image4
    // imageUrl
    // let { id } = useParams();
    // cosnt [id, setId] = useState(1);
    let [currentProduct, setCurrentProduct] = useState({});
    // console.log(id);
    let [loading, setLoading] = useState(false);
    let {cartData} = useSelector(Store=>Store);
    let id =  useSelector(Store=>Store.currentProduct);
    let dispatch = useDispatch()
    

    const handleaddToCart = ()=>{
        console.log(cartData);
        let count = getCurrentProductCount(cartData, id);
        console.log("current prodct count", count);
        currentProduct.count = count;
        addProductToCart(dispatch, currentProduct , true)
    }
    const handleaddToWishlist = ()=>{

    }

    const handlepagechange = () =>{
        setPage(dispatch);

    }

    const getCurrentData = ()=>{
        
        let result =  getCurrentProduct(id, productNameData);
        
        setCurrentProduct(result);
    }
    
    useEffect(()=>{
      setLoading(true);  
      getCurrentData();
      setLoading(false);
    },[id]);

    return (
        <>
        <div onClick={handlepagechange}>
            <p>
                {"<- go Back"}
            </p>
        </div>
        <div className='leftrightcontainer'>
             
            <div className='leftside'>
              
                  <div>  <img src={currentProduct.imageUrl} alt="productimage"></img></div>
                  <div>  <img src={currentProduct.image2} alt="productimage"></img></div>
                  <div>  <img src={currentProduct.image3} alt="productimage"></img></div>
                  <div>  <img src={currentProduct.image4} alt="productimage"></img></div>
            </div>
            <div className='rightside'>
                    <h3 className='productname'>{currentProduct.produtName}</h3>
                    <p className='productdescription'>{currentProduct.productDescription}</p>
                    <p className='price'>{`Rs. ${currentProduct.price} `} </p>
                    {/* <span className='originalPrice'>{`Rs. ${currentProduct.originalPrice}`}</span> <span className='offer'>{calculateOffer(id, currentProduct.originalPrice, currentProduct.price) + "% OFF"}</span> */}
                     <hr/>
                     <h4>SELECT SIZE</h4>

                    <div className='sizeboxcontainer'>
                        {
                            currentProduct.size?.map((eachSize)=>{
                                return (
                                    <div className='sizebox'>
                                        {eachSize}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button style={{backgroundColor:"pink"}}  onClick={handleaddToCart} className='button-6'>
                             ADD TO BAG
                    </button>
                    <button  style={{color:"pink"}} onclick={handleaddToWishlist} className='button-6'>
                             WISHLIST
                    </button>
            </div>
        </div>
        </>
    );
}

export default ProductDetailsPage;