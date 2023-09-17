import { Box, Grid } from "@chakra-ui/react";
// import Product_right_grid from "../component/Product_right_grid";
import Navbar from "../layouts/Navbar";
import ProductGrid from "../components/ProductGrid";
import { useState } from "react";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <Navbar onSelectCategory={handleCategorySelect} />
      <Box w={{ base: "90%", lg: "75%" }} m="auto">
        <Grid
          gridTemplateColumns={{ base: "1fr", lg: "3fr 10fr" }}
          h="auto"
          p="15px 10px"
        >
        
          <Box>
            <ProductGrid selectedCategory={selectedCategory} />
          </Box>
        </Grid>
      </Box>

    </>
  );
};

export default ProductPage;
