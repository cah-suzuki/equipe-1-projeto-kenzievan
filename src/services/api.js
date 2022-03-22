import axios from "axios";

const Api = axios.create({
  baseURL: "https://kenzievan-server.herokuapp.com/",
});

export default Api;
