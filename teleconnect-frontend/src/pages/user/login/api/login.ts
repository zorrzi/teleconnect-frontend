import axios from "axios";
import { config } from "../../../../config/config";

const api = axios.create({
  baseURL: `${config.apiBaseUrl}/auth`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // 🔥 Garante que os cookies sejam enviados
});

export const loginUser = async (email: string, password: string) => {
  return api.post("/login", { email, password });
};
