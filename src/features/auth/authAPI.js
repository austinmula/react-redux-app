import axios from "axios";

const API_URL = "http://localhost:4001/auth/login";

const login = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authAPI = { login };

export default authAPI;
