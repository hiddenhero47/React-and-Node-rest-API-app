import axios from "axios";
import { globalURL } from "../global";

// const API_URL = "/api/users/";

const API_URL = `${globalURL}/api/app/users/`;

// Get  Users
const getUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete User
const deleteUser = async ({userId, token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + userId, config);

  return response.data;
};

// Edit User
const changeUserRoal = async ({userId, newRole, token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const Role = {role: newRole}

  const response = await axios.put(API_URL + userId, Role, config);

  return response.data;
};


const usersService = {
    getUsers,
    deleteUser,
    changeUserRoal,
};

export default usersService;