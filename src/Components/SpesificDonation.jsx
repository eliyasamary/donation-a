import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getDonation, updateDonation, deleteDonation } from "../HTTP/http.js";
import ClipLoader from "react-spinners/ClipLoader";
import "../CSS/style.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const SpecificDonation = () => {
  const [id, setId] = useState("");
  const [donation, setDonation] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDonation, setEditedDonation] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  useEffect(() => {
    if (editedDonation && successMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [editedDonation, successMessage]);

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    setLoading(true);
    getDonation(id)
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
      })
      .finally(() => {
        setLoading(false);
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

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setEditedDonation(donation);
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditedDonation((prevDonation) => ({
      ...prevDonation,
      [name]: value,
    }));
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    updateDonation(editedDonation)
      .then(() => {
        setDonation(editedDonation);
        setIsEditing(false);
        setSuccessMessage("Donation updated successfully !");
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    setDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    deleteDonation(id)
      .then(() => {
        setSuccessMessage("Donation deleted successfully !");
        setDonation(null);
        setId("");
      })
      .catch((err) => console.log(err));
    setDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation(false);
  };

  return (
    <Box className="flex-container-col-secondary">
      <h1 className="body-title ">Find Donation By Id</h1>
      <Box className="donations-container">
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
            <Box className="btn-wrapper">
              <Button type="submit" variant="contained" className="form-btn">
                Find
              </Button>
            </Box>
          </form>
          {loading && <ClipLoader color="rgb(46, 42, 165)" />}{" "}
          {donation && !notFound && !loading && !isEditing && (
            <>
              <Box className="flex-container-col" style={{ marginTop: "20px" }}>
                <Box key={donation._id} className="donation">
                  <h3>Donor Name: {donation.donorName}</h3>
                  <p>Donation ID: {donation._id}</p>
                  <p>Amount: {donation.amount}</p>
                  <p>Location: {donation.location}</p>
                </Box>
                <Box style={{ display: "flex", gap: "30px" }}>
                  <Button className="modify-btn" onClick={handleEdit}>
                    <EditIcon />
                    Edit
                  </Button>
                  <Button className="modify-btn" onClick={handleDelete}>
                    <DeleteIcon />
                    Delete
                  </Button>
                </Box>
              </Box>
            </>
          )}
          {isEditing && (
            <form onSubmit={handleEditSubmit} className="form-container-row">
              <TextField
                className="input-field"
                label="Donor Name"
                name="donorName"
                value={editedDonation.donorName}
                onChange={handleEditChange}
              />
              <TextField
                className="input-field"
                label="Amount"
                name="amount"
                value={editedDonation.amount}
                onChange={handleEditChange}
              />
              <TextField
                className="input-field"
                label="Location"
                name="location"
                value={editedDonation.location}
                onChange={handleEditChange}
              />
              <div className="btn-wrapper">
                <Button type="submit" variant="contained" className="form-btn">
                  Save
                </Button>
              </div>
            </form>
          )}
          {notFound && !loading && (
            <p>
              No donation was found matching the provided id. Please ensure the
              name is entered correctly and try again.
            </p>
          )}
          {successMessage && (
            <div>
              <p className="successMessage">{successMessage}</p>
            </div>
          )}
          {deleteConfirmation && (
            <div className="pop-up-overlay">
              <div className="pop-up">
                <p className="successMessage">
                  Are you sure you want to delete this donation?
                </p>
                <div className="form-container-row">
                  <div className="btn-wrapper">
                    <Button onClick={handleConfirmDelete} className="form-btn">
                      Yes
                    </Button>
                  </div>
                  <div className="btn-wrapper">
                    <Button onClick={handleCancelDelete} className="form-btn">
                      No
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SpecificDonation;
