import axios from 'axios';

const API_KEY = '31253077-0a51af2ed3c94e9419b38a769&';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  per_page: 12,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`?key=${API_KEY}&q=${query}&page=${page}`);
  return data;
};
