import axios from "axios";

const baseURL = "https://expressserver-nyqb.onrender.com";

export const http = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

const getAllDonations = async () => {
  try {
    const response = await http.get("/donations");
    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
};

const getDonation = async (id) => {
  try {
    const response = await http.get("/donations/" + id);
    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
};

const createDonation = async (data) => {
  try {
    const response = await http.post("/donations", data);
    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
};

const updateDonation = async (data) => {
  try {
    console.log(data);
    const response = await http.put("/donations/" + data._id, data);
    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
};

const deleteDonation = async (id) => {
  try {
    const response = await http.delete("/donations/" + id);
    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
};

export {
  getAllDonations,
  getDonation,
  createDonation,
  updateDonation,
  deleteDonation,
};
