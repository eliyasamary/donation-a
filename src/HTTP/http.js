import axios from "axios";

const baseURL = "https://expressserver-nyqb.onrender.com";

export const http = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

const getAllDonations = async () => {
  const response = await http.get("/donations");
  return response.data;
};

const getDonation = async (id) => {
  const response = await http.get("/donations/" + id);
  return response.data;
};

const createDonation = async (data) => {
  const response = await http.post("/donations", data);
  return response.data;
};

const updateDonation = async (data) => {
  console.log(data);
  const response = await http.put("/donations/" + data._id, data);
  return response.data;
};

const deleteDonation = async (id) => {
  const response = await http.delete("/donations/" + id);
  return response.data;
};

export {
  getAllDonations,
  getDonation,
  createDonation,
  updateDonation,
  deleteDonation,
};
