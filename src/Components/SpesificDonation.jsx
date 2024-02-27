import React from "react";
import Box from "@mui/material/Box";
import { getDoantion } from "../HTTP/http.js";

const SpecificDonation = () => {
  const [donation, setDonation] = React.useState([]);
  let donationId = "612a6f8f0e3f3f0017f0e3f5";
  React.useEffect(() => {
    getDoantion(donationId)
      .then((data) => setDonation(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box className="donations-container">
      <Box key={donation._id} className="donation">
        <h3>Donor Name: {donation.donorName}</h3>
        <p>Amount: {donation.amount}</p>
        <p>Location: {donation.location}</p>
      </Box>
    </Box>
  );
};

export default SpecificDonation;
