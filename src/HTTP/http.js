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

export { getAllDoantions };
