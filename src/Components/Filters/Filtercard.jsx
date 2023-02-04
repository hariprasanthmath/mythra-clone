import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setBrandState, setCategory, setGender } from '../../Redux/actions/actions';
import "./filter.css"
function Filtercard(props) {

    let {brandFilter,categoryFilter,genderFilter} = useSelector(state=>state);
    
    let dispatch = useDispatch();
    
   

    const handlebrandfilter = (e) => {
        let brand = e.target.name;
          if(brandFilter.includes(brand)){
             let newBrandState = brandFilter.filter((eachBrand)=>{
                if(eachBrand != brand){
                    return eachBrand;
                }
             })
            //  console.log(newBrandState);
             setBrandState(dispatch, newBrandState);
          }else{
            brandFilter.push(brand);
            // console.log(brandFilter);
            setBrandState(dispatch, brandFilter);
          }
    }
    const handleOfferFilter = () => {
        
    }
    const resetAllFilters = ()=>{

    }

    const handleCategoryFilter = (e)=>{ //categoryFilter
          let category = e.target.name;
          if(categoryFilter.includes(category)){
            let newCategoryState = categoryFilter.filter((eachCategory)=>{
                if(eachCategory != category){
                    return eachCategory;
                }
            })
            setCategory(dispatch, newCategoryState);
          }else{
            categoryFilter.push(category);
            setCategory(dispatch, categoryFilter);
          }
         
    }

    const handlegenderfilter = (e)=>{
        let gender = e.target.name;
        if(genderFilter.includes(gender)){
            let newGenderState = genderFilter.filter((eachGender)=>{
                if(eachGender != gender){
                    return eachGender;
                }
            })
            setGender(dispatch, newGenderState);
        }else{
            genderFilter.push(gender);
            setGender(dispatch, genderFilter);
        }
    }

    useEffect(()=>{
       resetAllFilters();
    },[])

    return (
        <div className='filtercontainer'>
            <h3>Filter</h3>
             {/* brand filter */}
             <h4>Brands</h4>
            <div className='brandfilter' onChange={handlebrandfilter} >
                   <input type="checkbox" name="zara" />
                   <label > Zara</label><br/>
                   <input type="checkbox" name="roadster"/>
                   <label> Roadster</label><br/>
                   <input type="checkbox" name="arrow"/>
                   <label> Arrow</label><br/>
                   <input type="checkbox" name="wrong"/>
                   <label> Wrong</label><br/>
            </div>
            {/* price filter */}
            <h4>Gender</h4>
            <div className='gender' onChange={handlegenderfilter}>
                   <input type="checkbox" name="men"/>
                   <label for="vehicle1"> Male</label><br/>
                   <input type="checkbox" name="women"/>
                   <label for="vehicle1">Female</label><br/>
                   

            </div>
            {/*offer filter */}
            <h4>category</h4>
            <div className='catogory' onChange={handleCategoryFilter}>
                   <input type="checkbox" name="shirt"/>
                   <label> Shirt</label><br/>
                   <input type="checkbox" name="partywear"/>
                   <label > Party Wear</label><br/>
                   <input type="checkbox" name="casualshirt"/>
                   <label > Casual Wear</label><br/>
                   

            </div>
        </div>
    );
}

export default Filtercard;