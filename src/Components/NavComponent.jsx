import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box className="btns-container">
      <Link to="/">
        <Button variant="contained" className="root-btn">
          Show All Donasions
        </Button>
      </Link>
      <Link to="/:id">
        <Button variant="contained" className="root-btn">
          Find Donation
        </Button>
      </Link>
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
