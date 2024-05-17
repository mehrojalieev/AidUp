import axios from "axios";
import Cookies from "js-cookie";


const ApiInstance = axios.create({
  baseURL: "http://45.138.158.240:4040/api",
  headers: {
    "Content-type": "application/json",
  },
});

ApiInstance.interceptors.request.use(
  (setconfig) => {
    if (setconfig.url !== "/auth/login")
      setconfig.headers["Authorization"] = `Bearer ${Cookies.get("user-token")}`;
    return setconfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default ApiInstance;
