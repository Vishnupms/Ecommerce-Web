import React from "react";
import {
  Box,
  Flex,
  Text,
  Grid,
  Image,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";


const data = [
  {
    id: 1,
    src: "https://cdn-icons-png.flaticon.com/128/1147/1147934.png",
    title: "Fruits & Vegetables",
    url: "fruits",
  },
  {
    id: 2,
    src: "https://cdn-icons-png.flaticon.com/128/2276/2276931.png",
    title: "FOODGRAINS, OIL & MASALA",
    url: "grains",
  },
 
];

const Category = ({onSelectCategory}) => {
   const handleCategorySelect = (category)=>{
    onSelectCategory(category)
   }

  return (
    <Box border="1px solid #E8E8E8">
      <Menu>
        <Flex>
          <MenuButton
            pr=".5rem"
            p=".5rem"
            bg="#84c225"
            w={{ base: "100%", lg: "15rem" }}
            _hover={{ bg: "#84c225" }}
            border="1px solid #84c225"
            className="category_Btn"
            borderRadius="0px"
            rightIcon={<ChevronDownIcon color="white" />}
            _expanded={{ bg: "#84c225" }}
          >
            <Text
              fontSize="15px"
              fontWeight="500"
              fontFamily="Poppins"
              color="white"
            >
              SHOP BY CATEGORY
            </Text>
          </MenuButton>
        </Flex>
        <Flex>
          <MenuList
            w={{ base: "113%", lg: "none" }}
            px=".3rem"
            mt="-.5rem"
            borderRadius="0px"
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          >
            {data.map(({ title, id, src,url }) => {
              return (
                  <MenuItem
                    minH="48px"
                    key={id}
                    onClick={()=>handleCategorySelect(url)}
                  >
                    <Image
                      boxSize="1rem"
                      borderRadius="full"
                      src={src}
                      alt="Fluffybuns the destroyer"
                      mr="12px"
                    />
                    <Text
                      fontSize="13px"
                      fontFamily="Poppins"
                      fontWeight="400"
                      color="#808080"
                    >
                      {title}
                    </Text>
                  </MenuItem>
              );
            })}
          </MenuList>
        </Flex>
      </Menu>
    </Box>
  );
};

export default Category;