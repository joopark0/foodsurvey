import axios from 'axios';
const baseURL = 'https://foodsurvey-back.herokuapp.com/';

const sendData = (formData) => {
  const request = axios.post(baseURL, formData);
  return request.then((res) => res.data);
};

export default {
  sendData,
};
