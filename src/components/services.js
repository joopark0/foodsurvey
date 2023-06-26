import axios from 'axios';
const baseURL = 'https://foodsurvey-back.herokuapp.com/';

const sendData = (formData, restName) => {
  const request = axios.post(`${baseURL}${restName}`, formData);
  return request.then((res) => res.data);
};

export default {
  sendData,
};
