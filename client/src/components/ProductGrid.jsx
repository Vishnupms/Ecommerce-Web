import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Text,
  Flex,
  Select,
  Spinner,
} from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { RiTruckFill } from "react-icons/ri";
const dummyData = [
    {
      id: 1,
      product_info: "Product A",
      price: 19.99,
      rating: 4.5,
      discount: '2%',
      url: "fruits",
      src:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      brand:'Colgate',
      category: "fruits",
    },
    {
      id: 2,
      product_info: "Product B",
      price: 24.99,
      src:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      rating: 4.0,
      category:"grains"
    },
    {
      id: 3,
      product_info: "Product C",
      src:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      price: 14.99,
      category: "fruits",
      rating: 4.8,
    },
    {
      id: 4,
      product_info: "Product D",
      src:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      price: 29.99,
      category: "grains",
      rating: 4.2,
    },
    // Add more dummy data as needed
  ];

const ProductGrid = ({selectedCategory}) => {
  const [selectVal, setSelectVal] = useState("desc");
  console.log(selectedCategory,"cscs")
//   const products = useSelector((store) => store.ProductReducer.products);
  const loading = false
//   const loading = useSelector((store) => store.ProductReducer.isLoading);

  // let cat = products[0]?.category;

  const onChangeHandle = (e) => {
    setSelectVal(e.target.value);
  };
  const filteredItems = selectedCategory
  ? dummyData.filter((item) => item.category === selectedCategory)
  : dummyData;

  return (
    <>
      {loading ? (
        <Flex h="70vh" w="full" align="center" justify="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : (
        <Box
          pl={{ lg: "15px" }}
          w={{ base: "100%", md: "none" }}
          m={{ base: "auto", md: "none" }}
        >
          {/* Product category title and number of product*/}
          <Flex mb="2rem">
            <Text
              fontSize={{ base: "16px", md: "22px", lg: "20px" }}
              fontFamily=""
              color="#333"
              textAlign={"left"}
              fontWeight="400"
            >
              {/* {cat === undefined ? null : `${cat} (${products.length})`} */}
            </Text>
            <Box ml="auto">
              <Select color="#666" size="sm" onChange={onChangeHandle}>
                <option value="pop">Popularity</option>
                <option value="asc">price- Low to High</option>
                <option value="desc">price- High to Low</option>
                <option value="alpha">Alphabetically</option>
                <option value="rating">Sort by rating</option>
              </Select>
            </Box>
          </Flex>
          <Flex mb="1.3rem" align={"center"} px="15px">
            <Box mr="5px">
              <RiTruckFill color="#84c225" fontSize="18px" />
            </Box>
            <Text
              fontSize={{ base: "10px", lg: "12px" }}
              fontWeight="600"
              fontFamily=""
              color="#58595b"
              letterSpacing={1}
            >
              {selectedCategory?selectedCategory:" All Products"}
            </Text>
          </Flex>
          <Box borderBottom="1px solid #999" mt="-1rem" mb="1.5rem">
            <Box w="130px" h="1.5px" bg="#84c225" />
          </Box>
          <Grid
            gridTemplateColumns={{
              base: "1fr",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            rowGap="2rem"
          >
            {filteredItems
              .sort((a, b) => {
                if (selectVal === "asc") {
                  console.log("selected value", selectVal);
                  return Number(a.price) - Number(b.price);
                }
                if (selectVal === "desc") {
                  return Number(b.price) - Number(a.price);
                }
                if (selectVal === "alpha") {
                  return (
                    a.product_info.charCodeAt(0) - b.product_info.charCodeAt(0)
                  );
                }
                if (selectVal === "rating") {
                  return Number(b.rating) - Number(a.rating);
                }
              })
              .map((item, id) => {
                return (
                  <Box key={id} mb="2rem" ml="1rem"> {/* Add margin here */}
                    <ProductCard id={id} item={item} />
                  </Box>
                );
              })}
          </Grid>
        </Box>
      )}
    </>
  );
};
export default ProductGrid
