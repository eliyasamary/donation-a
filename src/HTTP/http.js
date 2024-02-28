import axios from "axios";

const baseURL = "https://expressserver-nyqb.onrender.com";

export const http = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

const getAllDoantions = async () => {
  const response = await http.get("/donations");
  return response.data;
};

const getDoantion = async (id) => {
  const response = await http.get("/donations/" + id);
  return response.data;
};

const createDoantion = async (data) => {
  const response = await http.post("/donations", data);
  return response.data;
};

const updateDoantion = async (data) => {
  console.log(data);
  const response = await http.put("/donations/" + data._id, data);
  return response.data;
};

const deleteDoantion = async (id) => {
  const response = await http.delete("/donations/" + id);
  return response.data;
};

export {
  getAllDoantions,
  getDoantion,
  createDoantion,
  updateDoantion,
  deleteDoantion,
};
