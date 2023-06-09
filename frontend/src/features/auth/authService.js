import axios from "axios";
import {globalURL} from "../global";

// const API_URL = "/api/users/";

const API_URL = `${globalURL}/api/users/`;

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  }
};

const authService = {
  register,
};

export default authService;
