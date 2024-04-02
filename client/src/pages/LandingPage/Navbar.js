// import React, { useSelector, useDispatch } from 'react-redux'
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import "./App.css"
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import {CLEAR__USER} from "../../redux/auth/authTypes"
// import { useLocation } from 'react-router-dom';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

// const Navbar1 = () => {
//     const state = useSelector(state => state.cart)
//     const user = useSelector(state => state.auth)
//     console.log(user)
//     const history = useHistory();
//     const dispatch = useDispatch();
//     const location = useLocation();

    
//     const [userData, setUserData] = useState(null);
//     useEffect(() => {
//         const userDataFromStorage = localStorage.getItem('user');
//         console.log(userDataFromStorage)
//         if (userDataFromStorage) {
//             setUserData(JSON.parse(userDataFromStorage));
//         }
//     }, []);


// const handleLogout = () => {
//     // Dispatch logout action
//     localStorage.clear("user");
//     localStorage.clear("auth_token");
//     dispatch({ type: "CLEAR__USER" });
//    history.push("/login")
//   };

//   const profile = () => {
//    history.push("/profile2")
//   };

//   return (
//     <div>
   
//        <div className="header-container container-fluid bg-light">
//         <div className="header-top">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-3 col-md-12">
//                  <a href = "/home">      <img src="assets/images/logo.png" alt=""  /></a> 
//                         <button className="navbar-toggler d-lg-none d-md-block " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <i className="fas fa-bars"></i>
//                         </button>
//                     </div>
//                     <div className="col-lg-9 d-none d-lg-block ">
//                         <ul>
//                             <li className='text-dark'><i className="far fa-envelope"></i> misbah7370@gmail.com</li>
//                             <li className='text-dark'><i className="fas fa-headphones-alt"></i> +189 8162 9287</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
       
//         <div id="menu-jk" className="header-bottom contaienr-fluid">
//             <div className="container">

          
//                 <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//                             <Navbar.Brand href="#home">ADVISIONS</Navbar.Brand>
//                             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                             <Navbar.Collapse id="responsive-navbar-nav">
//                                 <Nav className="mr-auto">
//                                 <Nav.Link as={Link} to="/home">Home</Nav.Link>
//                                     <Nav.Link as={Link} to="/about">About Us</Nav.Link>
//                                     <Nav.Link as={Link} to="/services">Services</Nav.Link>
//                                     <Nav.Link as={Link} to="/team">Team</Nav.Link>
//                                     <Nav.Link as={Link} to="/courses1">Courses</Nav.Link>
//                                     <Nav.Link as={Link} to="/news">Latest News</Nav.Link>
//                                     <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                                    
// {userData ? ( // Check if user data exists
//                        <NavDropdown title= {userData.userName} id="collapsible-nav-dropdown">
//                   <NavDropdown.Item onClick={profile}>Profile</NavDropdown.Item> 
                   
//                        <NavDropdown.Item  onClick={handleLogout}>     Logout
//                  </NavDropdown.Item>
//                    </NavDropdown>
//                 ) : (
//                     <Link to="/login" className="btn btn-outline-light m-2">
//                         Login
//                     </Link>
//                 )}
        
                                 

//                                 </Nav>
//                                 <Nav>
//                                     <Link to="/cart" className="btn btn-outline-light m-2">
//                                         Cart ({state ? state.length : 0})
//                                     </Link>
//                                     {/* Additional nav items */}
//                                 </Nav>
//                             </Navbar.Collapse>
//                         </Navbar>
//             </div>
//         </div>


//     </div>
    



//     </div>
    
//   )
// }

// export default Navbar1

import { Box, Button, Container } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import {BiMenuAltRight} from "react-icons/bi"
import DrawerComp from './DrawerComp'
import { useDispatch, useSelector } from 'react-redux'
// import toast from 'react-hot-toast'
// import { clearError, clearMessage } from '../reduxToolkit/slices/userSlice'
import { Link, useLocation } from 'react-router-dom'
import { blue } from '@material-ui/core/colors';
import logo from "./logo.png"

const Navbar = () => {

  const refToChild = useRef(null);
  const {isAuthenticated, user, message, error} = useSelector(state=> state.auth)
  const dispatch = useDispatch();
  const location = useLocation();
  

//   if(location.pathname == "/"){
//     document.title = "Code Blu";
//   }else if(location.pathname == "/courses"){
//     document.title = "Code Blu - Courses";
//   }else if(location.pathname == "/request"){
//     document.title = "Code Blu - Request Course";
//   }else if(location.pathname == "/contact"){
//     document.title = "Code Blu - Contact Us";
//   }
//   else if(location.pathname == "/about"){
//     document.title = "Code Blu - About Us";
//   }
//   else if(location.pathname == "/profile"){
//     document.title = "Code Blu - Profile";
//   }
//   else if(location.pathname.includes("admin")){
//     document.title = "Code Blu - Admin";
//   }
//   else if(location.pathname == "/login"){
//     document.title = "Code Blu - Login";
//   }
//   else if(location.pathname == "/register"){
//     document.title = "Code Blu - Register";
//   }
//   else if(location.pathname == "/forgetpassword"){
//     document.title = "Code Blu - Forget Password";
//   }else{
//     document.title = "Code Blu";
//   }

  useEffect(()=>{
      if(error){
       // toast.error(error)
        // dispatch(clearError())
      }
    
    if(message){
    //   toast.success(message)
     
    }

  }, [dispatch, message, error])

  const openDrawer = ()=>{
    if(refToChild.current){
      refToChild.current.click()
    }
  }
  return (
    <ChakraProvider>
     
    <Box h={20} py={13} px={10} display={'flex'} alignItems={'center'} justifyContent={'space-between'} style={{backgroundColor : "#2b6cb0"}}>
      <Link to={"/"}>
      <div className="container1">
   
      <img src= {logo} alt='logo' style={{ height : 90, width : 100}}/>

   <div className="text">
   <h2 style={{ color: "white", fontSize : 40}}>ADVISIONS</h2> 
      </div>
      </div>
      </Link>
      <Button colorScheme='blue' onClick={openDrawer}><BiMenuAltRight size={24} /></Button>
      <DrawerComp refFromParent={refToChild} isAuthenticated={isAuthenticated} user={user}/>
    </Box>
    </ChakraProvider>
  )
}

export default Navbar


