// src/pages/user/landingpage/components/api/fetchAllPackages.ts
import { config } from "@/config/config";

export async function fetchAllPackages() {
  // Faz GET /admin/list-packages
  const response = await fetch(`${config.apiBaseUrl}/admin/list-packages`, {
    method: "GET",
    credentials: "include", // Se precisar de cookie
  });
  const data = await response.json();

  if (!response.ok || data.status !== "success") {
    throw new Error(data.message || "Falha ao buscar pacotes");
  }

  // Retorna array
  return data.data || [];
}
