import Box from "@mui/material/Box";
// import React from "react";
import Button from "@mui/material/Button";
// import { getAllDoantions } from "./HTTP/http.js";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
