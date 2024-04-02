import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { RiDashboardFill } from "react-icons/ri";
// import { logout } from "../reduxToolkit/api_functions/user";
import { useDispatch, useSelector } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const DrawerComp = ({ refFromParent, isAuthenticated = false }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const state = useSelector(state => state.cart);
  console.log(state)
  const user = useSelector(state => state.auth)
  console.log(user)
  const history = useHistory();


  
  const [userData, setUserData] = useState(null);
  useEffect(() => {
      const userDataFromStorage = localStorage.getItem('user');
      console.log(userDataFromStorage)
      if (userDataFromStorage) {
          setUserData(JSON.parse(userDataFromStorage));
      }
  }, []);


const handleLogout = () => {
  // Dispatch logout action
  localStorage.clear("user");
  localStorage.clear("auth_token");
  dispatch({ type: "CLEAR__USER" });
 history.push("/login")
};

const profile = () => {
 history.push("/profile2")
};
  
  const dispatch = useDispatch()
  
 const logoutHandler = () => {

    onClose();
  };

  return (
    <>
 <ChakraProvider>
      <Button
        ref={refFromParent}
        display={"none"}
        colorScheme="teal"
        onClick={onOpen}
      >
        Open
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={"#2b6cb0"} color={"white"}>
   
          <DrawerCloseButton />
          <DrawerHeader>
       
          </DrawerHeader>

          <DrawerBody>
            <VStack
              alignItems={"flex-start"}
              spacing={6}
              justifyContent={"center"}
            >
              <Link to="/" onClick={onClose}>
                <Button color={"white"} variant={"link"}>Home</Button>
              </Link>
              <Link to="/Courses1" onClick={onClose}>
                <Button color={"white"} variant={"link"}>Courses</Button>
              </Link>
              <Link to="/team" onClick={onClose}>
                <Button color={"white"} variant={"link"}>Team</Button>
              </Link>
              <Link to="/contact" onClick={onClose}>
                <Button color={"white"} variant={"link"}>Contact Us</Button>
              </Link>
              <Link to="/about" onClick={onClose}>
                <Button color={"white"}   variant={"link"}>About</Button>
              </Link>
              <Link to="/cart" >
              <Button color={"white"}   variant={"link"}> 
              
                      Cart ({state ? state.length : 0}) </Button>
                                    </Link>
                                    {userData ?
                                     ( // Check if user data exists
                       <NavDropdown title= {userData.userName} id="collapsible-nav-dropdown">
                  <NavDropdown.Item onClick={profile}>Profile</NavDropdown.Item> 
                   
                       <NavDropdown.Item  onClick={handleLogout}>  
                          Logout
                 </NavDropdown.Item>
                   </NavDropdown>
                ) : (
                    <Link to="/login" className="btn btn-outline-light m-2">
                        Login
                    </Link>
                )}
            </VStack>
          </DrawerBody>

          <DrawerFooter display={"flex"} justifyContent={"space-evenly"} style={{backgroundColor : "#2b6cb0"}}>
            {isAuthenticated ? (
              <>
                <VStack>
                  <HStack>
                    <Button
                      variant={"outline"}
                      colorScheme="white"
                      onClick={logoutHandler}
                    >
                      Logout
                      <CgLogOut style={{ marginLeft: "5px" }} />
                    </Button>
                    <Link to={"/profile"} onClick={onClose}>
                      <Button colorScheme="blue">
                        Profile
                        <CgProfile style={{ marginLeft: "5px" }} />
                      </Button>
                    </Link>
                  </HStack>
                  {user && user.role === "admin" && (
                    <Link to={"/admin/dashboard"} onClick={onClose}>
                      <Button>
                        Dashboard
                        <RiDashboardFill style={{ marginLeft: "5px" }} />
                      </Button>
                    </Link>
                  )}
                </VStack>
              </>
            ) : (
              <>
                <Link to={"/register"} onClick={onClose}>
                  <Button variant={"outline"} colorScheme="white">
                    Sign Up
                  </Button>
                </Link>
       
                <Link to={"/login"} onClick={onClose}>
                  <Button colorScheme="blue">Login</Button>
                </Link>
              </>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </ChakraProvider>
    </>
  );
};

export default DrawerComp;
