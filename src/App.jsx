import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Header from "./Components/HeaderComponent.jsx";
import Navigation from "./Components/NavComponent.jsx";
import { getAllDoantions } from "./HTTP/http.js";

const App = () => {
  const [donations, setDonations] = React.useState([]);

  React.useEffect(() => {
    getAllDoantions()
      .then((data) => setDonations(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box className="root">
      <Header></Header>
      <Navigation></Navigation>
      <Box className="donations-container">
        {donations.map((donation) => (
          <Box key={donation._id} className="donation">
            <h3>Donor Name: {donation.donorName}</h3>
            <p>Amount: {donation.amount}</p>
            <p>Location: {donation.location}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default App;
