import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productNameData } from '../constants/productData';
import { getCurrentProduct } from '../Utils/getCurrentProduct';
import { useEffect } from 'react';
import "./productdetails.css"
import { calculateOffer } from '../Utils/calculateOffer';
import { useSelector } from 'react-redux';
import { addProductToCart } from '../Redux/actions/actions';
import { useDispatch } from 'react-redux';
import { getCurrentProductCount } from '../Utils/getCurrentProductCount';
function ProductDetailsPage(props) {
    // image2, image3, image4
    // imageUrl
    let { id } = useParams();
    let [currentProduct, setCurrentProduct] = useState({});
    // console.log(id);
    let [loading, setLoading] = useState(false);
    let {cartData} = useSelector(Store=>Store);
   
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
        <div>
            <div className='leftside'>
              
                  <div>  <img src={currentProduct.imageUrl} alt="productimage"></img></div>
                  <div>  <img src={currentProduct.image2} alt="productimage"></img></div>
                  <div>  <img src={currentProduct.image3} alt="productimage"></img></div>
                  <div>  <img src={currentProduct.image4} alt="productimage"></img></div>
            </div>
            <div className='rightside'>
                    <p>{currentProduct.produtName}</p>
                    <p>{currentProduct.productDescription}</p>
                     
                    <p>{`Rs. ${currentProduct.price} `} <span className='originalPrice'>{`Rs. ${currentProduct.originalPrice}`}</span> <span className='offer'>{calculateOffer(id, currentProduct.originalPrice, currentProduct.price) + "% OFF"}</span></p>
                    <div>
                        <h4>SELECT SIZE</h4>
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
                    <button onClick={handleaddToCart} className='addtocartbutton'>
                             ADD TO BAG
                    </button>
                    <button onclick={handleaddToWishlist} className='addtowishlistbutton'>
                             WISHLIST
                    </button>
            </div>
        </div>
    );
}

export default ProductDetailsPage;