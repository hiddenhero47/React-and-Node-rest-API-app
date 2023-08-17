import axios from "axios";
import { globalURL } from "../global";

// const API_URL = "/api/users/";

const API_URL = `${globalURL}/api/app/content/`;

// Create new Content
const createContent = async ({ContentData, token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, ContentData, config);

  return response.data;
};

// Get  Content
const getContent = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete Content
const deleteContent = async ({ContentId, token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + ContentId, config);

  return response.data;
};

// Edit Content
const editContent = async ({ContentId, ContentData, token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + ContentId, ContentData, config);

  return response.data;
};


const contentService = {
    createContent,
    getContent,
    deleteContent,
    editContent,
};

export default contentService;
