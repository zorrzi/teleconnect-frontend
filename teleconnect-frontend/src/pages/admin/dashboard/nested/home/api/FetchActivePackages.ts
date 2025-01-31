// src/api/fetchActivePackages.ts
import { config } from "../../../../../../config/config";

/**
 * Faz a requisição ao backend para buscar os planos ativos.
 */
export async function fetchActivePackages() {
  try {
    const response = await fetch(`${config.apiBaseUrl}/admin/active-packages`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok || data.status !== "success") {
      throw new Error(data.message || "Erro ao buscar planos ativos.");
    }

    return data.data; // Retorna os pacotes ativos
  } catch (error) {
    console.error("Erro ao buscar planos ativos:", error);
    throw error;
  }
}
