import axios from "axios";
import { config } from "../../../../config/config";

const api = axios.create({
  baseURL: `${config.apiBaseUrl}/auth`,
  headers: { "Content-Type": "application/json" },
});

export const registerUser = async (userData: {
  cpf: string;
  phone: string;
  email: string;
  password: string;
  name: string;
}) => {
  return api.post("/register", userData);
};
