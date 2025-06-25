import axios from "axios";

const postLogout = async () => {
  return await axios.post("/api/auth/logout");
};

export default postLogout;
