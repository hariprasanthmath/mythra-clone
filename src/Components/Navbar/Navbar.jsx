import React from 'react';
import "./navbar.css"
import { urls } from '../../constants/constant';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useDisclosure, Drawer, DrawerOverlay,DrawerBody, DrawerContent, DrawerCloseButton,DrawerHeader, DrawerFooter, Input, Button, Text  } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import { findCartTotal } from '../../Utils/getCartTotal';

function Navbar(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    let [currentClicked , setCurrentClicked] = useState("");
    let {cartData} = useSelector(state=>state);
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

    // const decreasecount = ()=>{
    //     decreaseProductCountFromCart(dispatch, {category, description, image, price, owner, title, _id, count}, false)
    //   }
    //   const increasecount = ()=>{
    //     addProductToCart(dispatch, {category, description, image, price, owner, title, _id, count}, true)
    //   }



    return (
<>

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
                 <div onClick={()=>{onOpen();setCurrentClicked("watchlist")}}>
                     <p>Wishlist</p>
                 </div>
                 <div onClick={()=>{onOpen();setCurrentClicked("bag")}}>
                    <p>Bag</p>
                 </div>
            </div>
        </div>
        <ChakraProvider>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="md"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{currentClicked==="bag"?"Cart":"Wish List"}</DrawerHeader>
  
            <DrawerBody>
             
             {
               currentClicked==="bag" ?  cartData.map((eachData)=>{
                    return (
                        <div style={{margin:"10px 0px",display:"flex",flexDirection:"row"}}>
                            <img style={{width:"100px"}} src={eachData.imageUrl} alt="image"></img>
                            <div style={{marginLeft:"20px"}}>
                            <p style={{fontWeight:"700"}}>{eachData.produtName}</p>
                            <p>Rs. {eachData.price}</p>
                            <p>Qty : {eachData.count}</p>
                            </div>
                        </div>
                    )
                }) :
                <></>
             } 

             


            </DrawerBody>
  
            <DrawerFooter>

                {
                    currentClicked==="bag" ? <div style={{marginRight:"100px"}}>
                    <h3 ><span style={{fontWeight:"700"}}>Total :</span> {findCartTotal(cartData)}</h3>
                </div> : <></>
                }
                
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              {
                 currentClicked==="bag" ? <Button colorScheme='blue'>Checkout</Button> : <Button onClick={()=>setCurrentClicked("bag")}>Cart</Button>
              }
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        </ChakraProvider>
                </>
    );
}

export default Navbar;

// function DrawerExample() {
  
  
//     return (
//       <>
//         <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
//           Open
//         </Button>
        
//       </>
//     )
//   }