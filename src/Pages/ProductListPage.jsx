import React from 'react';
import { productNameData } from '../constants/productData';
import ProductCard from '../Components/ProductCard/ProductCard';
import "./productlist.css"

function ProductListPage(props) {
    return (
        <div className='productscontainer'>
            {
                productNameData.map((eachProduct)=>{
                    return (
                        <ProductCard {...eachProduct}/>
                    )
                })
            }
        </div>
    );
}

export default ProductListPage;