import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getDoantion } from "../HTTP/http.js";

const SpecificDonation = () => {
  const [id, setId] = React.useState("");
  const [donation, setDonation] = React.useState(null);
  const [notFound, setNotFound] = React.useState(false);

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    getDoantion(id)
      .then((data) => {
        if (data) {
          setDonation(data);
          setNotFound(false);
        } else {
          setDonation(null);
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id.trim() !== "") {
      handleSearch();
    } else {
      setDonation(null);
      setNotFound(false);
    }
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
        <form onSubmit={handleSubmit} className="form-container-row">
          <Box>
            <TextField
              className="input-field"
              label="Enter Donation ID"
              value={id}
              onChange={handleInputChange}
            />
          </Box>
          <Box>
            <Button type="submit" variant="contained" className="form-btn">
              Submit
            </Button>
          </Box>
        </form>
        {donation && !notFound && (
          <Box key={donation._id} className="donation">
            <h3>Donor Name: {donation.donorName}</h3>
            <p>Amount: {donation.amount}</p>
            <p>Location: {donation.location}</p>
          </Box>
        )}
        {notFound && (
          <p>
            s No donation was found matching the provided id. Please ensure the
            name is entered correctly and try again.
          </p>
        )}{" "}
      </Box>
    </Box>
  );
};

export default SpecificDonation;
