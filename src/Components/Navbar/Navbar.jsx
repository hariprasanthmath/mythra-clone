import React from 'react';
import "./navbar.css"
import { urls } from '../../constant';
import { Link } from 'react-router-dom';
function Navbar(props) {

    let Navcontent = [
        {
            name : "MEN",
            path : "mens"
        },
        {
            name : "WOMEN",
            path : "womens"
        },{
            name : "KIDS",
            path : "kids"
        },
        {
             name : "HOME & LIVING",
             path : "home-living"
        },
        {
            name : "BEAUTY",
            path : "STUDIO"
        }
    ]


    return (

        <div className='navbarcontainer'>
            <div className='logocontainer'>
                <img src={urls.mynthralogo} alt={"mynthralogo"}></img>
            </div>
            <div className='desktop-navContainer'>
                {/* <Link to={"mens"}>Mens</Link>
                <Link to={"mens"}>Mens</Link>
                <Link to={"mens"}>Mens</Link>
                <Link to={"mens"}>Mens</Link>
                <Link to={"mens"}>Mens</Link>
                <Link to={"mens"}>Mens</Link> */}
                {
                    Navcontent.map((eachItem)=>{
                        return (
                            <div className='routecontainer'>
                                <p>{eachItem.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='searchcontainer'>
                <input placeholder='Search for products, brands and more'></input>
            </div>
            <div className='wishbagcont'>
                 <div>
                     <p>Wishlist</p>
                 </div>
                 <div>
                    <p>Bag</p>
                 </div>
            </div>
        </div>

    );
}

export default Navbar;