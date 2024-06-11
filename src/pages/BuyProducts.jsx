import React from "react";
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar";
import ProductList from "../products/ProductList";

const BuyProducts = () => {
  return(
    <>
    <Navbar/>
    <Box height = {70} />
    <Box sx={{ display: 'flex' }}>
      <Sidenav/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <ProductList/>
      </Box>
       </Box>
       </>
  ); 
};

export default BuyProducts;
