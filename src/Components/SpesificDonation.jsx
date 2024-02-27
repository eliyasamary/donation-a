import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { getDoantion } from "../HTTP/http.js";

const SpecificDonation = () => {
  const [id, setId] = React.useState("");

  const [donation, setDonation] = React.useState(null);

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    getDoantion(id)
      .then((data) => setDonation(data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <Box className="donations-container">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "70px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box>
            <TextField
              label="Enter Donation ID"
              value={id}
              onChange={handleInputChange}
            />
          </Box>
          <Box>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
        {donation && (
          <Box key={donation._id} className="donation">
            <h3>Donor Name: {donation.donorName}</h3>
            <p>Amount: {donation.amount}</p>
            <p>Location: {donation.location}</p>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SpecificDonation;
