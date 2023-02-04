import React, { useEffect, useState } from 'react';
import { productNameData } from '../constants/productData';
import ProductCard from '../Components/ProductCard/ProductCard';
import "./productlist.css"
import Filtercard from '../Components/Filters/Filtercard';
import { useSelector } from 'react-redux';

function ProductListPage(props) {
    let {brandFilter} = useSelector(state=>state);
    let {categoryFilter}  = useSelector(state=>state);
    let {genderFilter}=  useSelector(state=>state);
    let [showData, setData] = useState([]);

    const applyFilters = (brandFilter, categoryFilter, genderFilter, productNameData) =>{
        if(brandFilter.length ===0 && categoryFilter.length === 0 && genderFilter.length === 0){
            return productNameData;
        }
        console.log(brandFilter, categoryFilter, genderFilter);
         let genderfiltered =   productNameData.filter((eachProduct)=>{
                 if(genderFilter.includes(eachProduct.gender)){
                    return eachProduct;
                 }
            })

        let categoryFiltered = genderfiltered.filter((eachProduct)=>{
            if(categoryFilter.includes(eachProduct.category) ){
                return eachProduct;
            }
        })

        let brandFiltered = categoryFiltered.filter((eachProduct)=>{
                    if( brandFilter.includes(eachProduct.brandName)){
                        return eachProduct;
                    }
                })
                // setData(brandFiltered);

        

            console.log(brandFiltered);
        return brandFiltered;
        
    }

    // const filterbrand = () =>{
           
    //     let result = productNameData.filter((eachProduct)=>{
    //         if( brandFilter.includes(eachProduct.brandName)){
    //             return eachProduct;
    //         }
    //     })
    //     setData(result);
    // }

    // const filterCategory = () =>{
    //     let result = productNameData.filter((eachProduct)=>{
    //         if(categoryFilter.includes(eachProduct.category) ){
    //             return eachProduct;
    //         }
    //     })
    //     setData(result);
    // }
    // const filterGender = () => {
    //     let result  =   productNameData.filter((eachProduct)=>{
    //         if(genderFilter.includes(eachProduct.gender)){
    //            return eachProduct;
    //         }
    //    })
    //    setData(result);
    // }

//     useEffect(()=>{
//           filterbrand();
//     },[brandFilter])
//     useEffect(()=>{
//         filterCategory();
//   },[categoryFilter])
//   useEffect(()=>{
//     filterGender();
// },[genderFilter])
// useEffect(()=>{
//     console.log(showData);
// },[showData])
    useEffect(()=>{
        console.log("rendering");
        let result = applyFilters(brandFilter, categoryFilter, genderFilter, productNameData)
        setData(result);
        
    },[brandFilter, genderFilter, categoryFilter])

    // useEffect(()=>{

    //     let result = applyFilters(brandFilter, categoryFilter, genderFilter, productNameData)
    //     setData(result);
        
    // },[])

    return (
        <div className='filterandlist'>
            <div>
               <Filtercard/>
            </div>
            <div className='productscontainer'>
            {
                showData?.map((eachProduct)=>{
                    return (
                        <ProductCard {...eachProduct}/>
                    )
                })
            }
        </div>
        </div>
    );
}

export default ProductListPage;