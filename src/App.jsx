// import { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Header from "./Components/HeaderComponent.jsx";

const App = () => {
  return (
    <Box className="root">
      <Header></Header>
      <Box className="btns-container">
        <Button variant="contained" className="root-btn">
          Show All Donasions
        </Button>
        <Button variant="contained" className="root-btn">
          Search Donation
        </Button>
        <Button variant="contained" className="root-btn">
          Update Donation
        </Button>
        <Button variant="contained" className="root-btn">
          New Donation
        </Button>
        <Button variant="contained" className="root-btn">
          Delete Donation
        </Button>
      </Box>
    </Box>
  );
};

export default App;
