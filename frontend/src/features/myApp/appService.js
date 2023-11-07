import axios from "axios";
import { globalURL } from "../global";

// const API_URL = "/api/users/";

const API_URL = `${globalURL}/api/app/content/`;

// Get  Content
const getContentBysearchField = async ({ searchField, searchString }) => {
    const response = await axios.get(API_URL + searchField, {
        params: { searchString }, // Pass searchString as a query parameter
        // timeout: 30000,
      });

  return response.data;
};

const appServices = {
  getContentBysearchField,
};

export default appServices;
