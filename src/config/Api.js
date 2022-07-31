import axios from "axios";

const api = axios.create({
  baseURL: `https://mitramas-test.herokuapp.com`,
});

api.interceptors.request.use((request) => {
  console.log("Starting Request", JSON.stringify(request, null, 2));
  return request;
});

export default api;
