import React from "react";
import "../CSS/style.css";
import Box from "@mui/material/Box";
import { getAllDoantions } from "../HTTP/http";

const AllDonations = () => {
  const [donations, setDonations] = React.useState([]);

  React.useEffect(() => {
    getAllDoantions()
      .then((data) => setDonations(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box className="donations-container">
      {donations.map((donation) => (
        <Box key={donation._id} className="donation">
          <h3>Donor Name: {donation.donorName}</h3>
          <p>Amount: {donation.amount}</p>
          <p>Location: {donation.location}</p>
        </Box>
      ))}
    </Box>
  );
};

export default AllDonations;
