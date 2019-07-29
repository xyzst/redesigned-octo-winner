import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-b9884.firebaseio.com/" // DO NOT COMMIT THIS!!!
});

export default instance;
