import axios from "axios";

export const userServiceRegister = (formData: object) => {
  return axios.post(`http://localhost:5000/api/users/register`, formData);
};
