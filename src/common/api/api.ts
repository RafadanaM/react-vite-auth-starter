import ApiClient from "./client/apiClient";

const publicApiClient = new ApiClient({ baseURL: "http://localhost:5000/api" });
const privateApiClient = new ApiClient({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

export { publicApiClient, privateApiClient };
