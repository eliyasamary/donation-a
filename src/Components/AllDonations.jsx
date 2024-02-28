import React from "react";
import "../CSS/style.css";
import Box from "@mui/material/Box";
import { getAllDonations } from "../HTTP/http";
import ClipLoader from "react-spinners/ClipLoader";

const AllDonations = () => {
  const [donations, setDonations] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getAllDonations()
      .then((data) => {
        setDonations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ClipLoader color="rgb(46, 42, 165)" />;
  }

  return (
    <Box className="flex-container-col">
      <h1 className="body-title ">There Are {donations.length} Donations</h1>
      <Box className="donations-container">
        {donations.map((donation) => (
          <Box key={donation._id} className="donation">
            <h3>Donor Name: {donation.donorName}</h3>
            <p>Donation ID: {donation._id}</p>
            <p>Amount: {donation.amount}</p>
            <p>Location: {donation.location}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AllDonations;
