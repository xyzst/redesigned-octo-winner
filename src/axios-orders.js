import axios from 'axios';

const instance = axios.create({
  baseURL: "" // DO NOT COMMIT THIS!!!
});

export default instance;