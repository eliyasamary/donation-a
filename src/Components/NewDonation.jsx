import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createDonation } from "../HTTP/http";
import "../CSS/style.css";

const NewDonation = () => {
  const [donationData, setDonationData] = useState({
    donorName: "",
    amount: "",
    location: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [successMessage]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDonationData({
      ...donationData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createDonation(donationData)
      .then(() => {
        setSuccessMessage("Donation created successfully !");
        setDonationData({
          donorName: "",
          amount: "",
          location: "",
        });
        setError("");
      })
      .catch((err) => {
        console.error("Error creating donation:", err);
        setSuccessMessage("");
        setError("Failed to create donation. Please try again.");
      });
  };

  return (
    <Box className="flex-container-col">
      <h1 className="body-title">Create New Donation</h1>
      <form onSubmit={handleSubmit} className="flex-container-col">
        <TextField
          className="input-field"
          label="Donor Name"
          name="donorName"
          value={donationData.donorName}
          onChange={handleInputChange}
        />
        <TextField
          className="input-field"
          label="Amount"
          name="amount"
          type="number"
          value={donationData.amount}
          onChange={handleInputChange}
        />
        <TextField
          className="input-field"
          label="Location"
          name="location"
          value={donationData.location}
          onChange={handleInputChange}
        />
        <div className="btn-wrapper">
          <Button type="submit" variant="contained" className="form-btn">
            Save
          </Button>
        </div>
      </form>
      {successMessage && (
        <div>
          <p className="successMessage">{successMessage}</p>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </Box>
  );
};

export default NewDonation;
