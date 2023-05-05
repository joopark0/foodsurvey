import axios from 'axios';
const baseURL = 'http://localhost:3001/';

const sendData = (formData) => {
  const request = axios.post(baseURL, formData);
  return request.then((res) => res.data);
};
