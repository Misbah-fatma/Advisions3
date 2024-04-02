import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { addCart } from "../../redux/cart/cartAction";
import "./App.css"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BsCollectionPlayFill, BsListUl } from "react-icons/bs";
import { LuView } from "react-icons/lu";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  VStack,
  Text,
  Image
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar"
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import animationData from "./Animation - 1703153032547.json"

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const state = useSelector(state => state.cart)
  let componentMounted = true;

  const dispatch = useDispatch();


  const addProduct = (product) => {
    console.log("Onclick1")
    dispatch(addCart(product))
    console.log("Onclick2")
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
        const response = await axios.post('http://localhost:5000/data-courses');
        if (componentMounted) {
         setData(await response.data.data);
         setFilter(await response.data.data);
         setLoading(false);
        }  
        return () => {
          componentMounted = false;
        };
    };
  

    getProducts();
  }, []);

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const { loading1, error, courses, message } = useSelector(
    (state) => state.course
  );

  const categories = [
    "All",
    "Web development",
    "App development",
    "Data Science",
    "Artificial inteligence",
    "Machine learning",
  ];

  useEffect(() => {
    if (message) {
      toast.success(message);   
    }
    if (error) {
      toast.error(error);
    }
  }, [category, keyword, error, message]);
  

  const Loading = () => {
    return (
      <>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      
      </>
    );
  };

  const filterProducts = () => {
    return filter.filter(product =>
      product.courseName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };



  const ShowProducts = () => {
    const filteredProducts = filterProducts();
  
    return (
      <>
   {filteredProducts.map((product) => {

          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"> 
            <Grid
            templateColumns={['.1fr', '.1fr', 'repeat(2, .1fr)', 'repeat(3, .1fr)']}
            gap={6}
            margin={'auto'}
            py={8}          
            maxW={"container.xl"}>
            <GridItem  key={product.id} margin={'auto'}>
                <VStack
                className="course"
                alignItems={"space-between"}
                justifyContent={'space-between'}
                flex={1}
                flexGrow={1}
                maxW={"350px"}
                minH={["550px", "510px"]}
                p={4}
                borderRadius={"10px"}             
                shadow={"lg"}
                gap={4}
              >
                <Image src={product.courseThumbnail} h={"200px"} w={"350px"} marginX={'auto'} objectFit={"cover"} />
                <Heading
                  textAlign={"left"}
                  fontFamily={"sans-serif"}
                  noOfLines={1}
                  size={["sm", "md"]}
                  textTransform={"uppercase"}
                >
                  {product.courseName}
                  </Heading>
                  <Text noOfLines={5}>{product.courseDescription}</Text>
      <HStack>
        <Text fontWeight={"bold"} textTransform={"uppercase"}>
          Creator -
        </Text>
        <Text fontFamily={"body"} textTransform={"uppercase"}>
          {/* {product.courseLink} */}
          Mr. Santosh Singh
        </Text>
      </HStack>

      <HStack justifyContent={"space-between"}>
        <HStack>
          <LuView size={20} />
          <Heading
            size={"sm"}
            fontWeight={"normal"}
            textTransform={"uppercase"}
          >
            {product.coursePrice} $
          </Heading>
          </HStack>
          <Link to = "/courseInfo1">
          <HStack>
          <BsListUl size={20} />
          <Heading
            size={"sm"}
            fontWeight={"normal"}
            textTransform={"uppercase"}
          >
            {} Lectures
          </Heading>
        </HStack>
        </Link>
      </HStack>
    

      <Stack
        direction={["column", "row"]}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Link to={`/course`}>
          <Button colorScheme="blue">
            Watch Now <BsCollectionPlayFill style={{ marginLeft: "10px" }} />
          </Button>
        </Link>
        <Button
          isLoading={loading}
          variant={"outline"}
          colorScheme="blue"
          onClick={() => addProduct(product)}
        >
          Add to playlist
          <AiOutlineVideoCameraAdd size={22} style={{ marginLeft: "10px" }} />
        </Button>
      </Stack>
    </VStack>      
    </GridItem>
        </Grid>
        </div>       
          );
        })}
      </>
    );
  };


  return (
    <>
<Navbar />
<ChakraProvider>
      <Container maxW={"container.lg"}>
        <Heading textAlign={"center"} size={"2xl"} letterSpacing={"1px"} m={8}>
          All Courses
        </Heading>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <BsSearch color="gray.300" />
          </InputLeftElement>
          <Input
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search a course ..."
          />
        </InputGroup>
        <Heading mt={4} size={"md"}>
          Select Category
        </Heading>
        <HStack
          gap={4}
          alignItems={"center"}
          w={"full"}
          m={"auto"}
          mt={4}
          flexWrap={"wrap"}
        >
          {categories.map((item, index) => (
            <Button
              variant={"link"}
              onClick={() => {
                if (item == "All") {
                  setCategory("");
                } else {
                  setCategory(item);
                }
                setActiveTab(index);
              }}
              color={activeTab === index ? "blue.500" : ""}
              key={item}
            >
              {item}
            </Button>
          ))}
        </HStack>
        </Container>
        <Container maxW={"container.xl"}>
      <div className="row justify-content-center">     
          {loading ? <Loading /> : <ShowProducts />}
          </div>
          </Container>
      </ChakraProvider>
    </>
  );
};

export default Products;


