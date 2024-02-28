import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../App.css";
import "../CSS/style.css";

const Navigation = () => {
  return (
    <Box className="btns-container">
      <Link to="/allItems" className="link-btn">
        <Button variant="contained" className="root-btn">
          Show All Donasions
        </Button>
      </Link>
      <Link to="/item" className="link-btn">
        <Button variant="contained" className="root-btn">
          Find Donation
        </Button>
      </Link>
      <Link to="/newItem" className="link-btn">
        <Button variant="contained" className="root-btn">
          New Donation
        </Button>
      </Link>
    </Box>
  );
};

export default Navigation;
