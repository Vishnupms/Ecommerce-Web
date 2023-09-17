import {
    Box,
    Flex,
    Grid,
    Image,
    Text,
    Input,
    InputGroup,
    InputLeftAddon,
    Button,
    Stack,
    useToast,
  } from "@chakra-ui/react";
  import { GiSevenPointedStar } from "react-icons/gi";
  import { RiTruckFill } from "react-icons/ri";
  import { IoMdCart } from "react-icons/io";
  import { Link } from "react-router-dom";

  
  const ProductCard = ({ item, id }) => {
    const toast = useToast();

  
  
    return (
      <Stack spacing="20px"> 
      <Box
        border="1px solid #f2f2f2"
        borderRadius="8px" 
        overflow="hidden"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" 
        transition="transform 0.2s, box-shadow 0.2s" 
        width="100%"
        maxWidth="300px"
        h="auto"
        p="5px"
        key={id}
        _hover={{ 
          transform: "translateY(-4px)",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        {/* get offer */}
        <Link to={`/singleproduct`}>
          <Box >
            {/* <Flex
              p={{ base: "5px", md: "5px 10px" }}
              align="center"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              justify={"right"}
              zIndex={1}
            >
              <Text
                fontSize="10px"
                fontFamily=""
                color="#ba5253"
                textAlign={"right"}
                fontWeight="500"
              >
                GET {item?.discount} OFF
              </Text>
              <Box pl="5px">
                <GiSevenPointedStar color="#ba5253" fontSize="10px" />
              </Box>
            </Flex> */}
            {/* product Image */}
            <Grid justifyItems={"center"} pt=".5rem" pb="1rem">
            <Image src={item?.src} alt="Image not available" w="95%" h="auto" borderRadius="8px" border={"1px"} borderColor={"gray.300"} />
            </Grid>
            {/* product details section  */}
            <Box px="5px">
              <Text
                fontSize="10px"
                fontFamily=""
                color="#999"
                textAlign={"left"}
                fontWeight="500"
              >
                {item?.brand}
              </Text>
              <Text
                fontSize="13px"
                fontFamily=""
                color="#0b0b0b"
                textAlign={"left"}
                fontWeight="400"
                width="200px"
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
              >
                {item?.product_info}
              </Text>
              <Flex py="5px" align="center">
                <Flex
                  align="center"
                  bg="rgb(227, 235, 218)"
                  justify="space-around"
                  px="5px"
                  py="2px"
                  maxWidth="fit-content"
                  mr="7px"
                >
                  <Text
                    fontSize="11px"
                    fontFamily=""
                    color="#689f38"
                    textAlign={"left"}
                    fontWeight="400"
                  >
                    {item?.rating}
                  </Text>
                  <Box pl="5px">
                    <GiSevenPointedStar color="#689f38" fontSize="10px" />
                  </Box>
                </Flex>
                <Text
                  fontSize="11px"
                  fontFamily=""
                  color="#4a4a4a"
                  fontWeight="400"
                >
                  {item?.rating_Number} Ratings
                </Text>
              </Flex>
              <Flex px="10px" h="22px" border="1px solid #ccc" my="10px">
                <Text
                  fontSize="12px"
                  fontFamily=""
                  color="#666"
                  textAlign={"left"}
                  fontWeight="500"
                  mr="5px"
                >
                  {item?.weight}
                </Text>
                <Text
                  fontSize="12px"
                  fontFamily=""
                  color="#666"
                  textAlign={"left"}
                  fontWeight="500"
                >
                  {item?.price}
                </Text>
              </Flex>
            </Box>
          </Box>
        </Link>
        {/* MRP, Quantity and add to cart section*/}
        <Box bg="#f4f3f2" py="5px" px="5px">
          <Flex align={"center"}>
            <Text
              fontSize="11px"
              fontFamily=""
              color="#666"
              textAlign={"left"}
              fontWeight="400"
              mr="5px"
            >
              MRP{" "}
              <span style={{ textDecoration: "line-through" }}>
                Rs {item?.mrp}
              </span>
            </Text>
            <Text
              fontSize="14px"
              fontFamily=""
              color="#231f20"
              textAlign={"left"}
              fontWeight="400"
            >
              Rs-{item?.price}
            </Text>
          </Flex>
          <Flex pr="5px">
            <Box mr="5px" _hover={{ color: "#79933b" }}>
              <RiTruckFill color="#888" fontSize="18px" />
            </Box>
            <Text
              fontSize="10px"
              fontFamily=""
              color="#333"
              textAlign={"left"}
              fontWeight="400"
            >
              {item?.delivery_day_time}
            </Text>
          </Flex>
          <Stack mb="5px">
            <InputGroup borderColor="#ccc" size="xs">
              <InputLeftAddon
                children="Qty"
                color="#999"
                fontSize="12px"
                bg="#eee"
              />
              <Input type="number" color="#333" fontSize="14px" bg="#fff" />
            </InputGroup>
            <Button
              rightIcon={<IoMdCart fontSize="15px" />}
              fontSize="14px"
              colorScheme="teal"
              variant="solid"
              size="xs"
              onClick={() => {
                AddProductToCart(item);
                toast({
                  title: "Added to cart SuccessFully",
                  description: `${item.product_info}`,
                  position: "top-center",
                  status: "success",
                  duration: 1000,
                  isClosable: true,
                });
              }}
            >
              Add 
            </Button>
          </Stack>
        </Box>
      </Box>
      </Stack>
    );
  };
  
  export default ProductCard;
  