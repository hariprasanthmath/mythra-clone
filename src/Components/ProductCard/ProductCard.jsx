import React from 'react';
import "./productcard.css"
import { produtNameData } from '../../constants/productData';
import { useState } from 'react';
import { calculateOffer } from '../../Utils/calculateOffer';
import Extracard from './Extracard';
import { useNavigate } from 'react-router-dom';

function ProductCard({imageUrl, brandName, produtName, gender, image2, image3, image4, price, category, size, productDescription, id}) {
    let [isShown,setIsShown] = useState(false);
    let originalPrice = "2000"
    let navigate = useNavigate();

    const navigateToDetails = () => {
       navigate(`/products/${id}`)
    }

    return (
        <div className='productcard'
        
        onMouseEnter={()=>{setIsShown(true);}}
        onMouseLeave={()=>{setIsShown(false);}}
        >
            <img onClick={navigateToDetails} src={imageUrl} alt={produtName}></img>
            {
                isShown ? 
                <Extracard/> :
                <>
                    <p>{brandName}</p>
                    <p>{produtName}</p>
                </>
            }
           
            <p>{`Rs. ${price} `} <span className='originalPrice'>{`Rs. ${originalPrice}`}</span> <span className='offer'>{calculateOffer(id, originalPrice, price) + "% OFF"}</span></p>
        </div>
    );
}

export default ProductCard;