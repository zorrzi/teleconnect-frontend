// src/pages/user/meusplanos/api/MeusPlanos.ts
import { config } from "../../../../config/config";

/**
 * Faz a requisição ao backend para listar os pacotes do usuário logado.
 * É necessário que o usuário já esteja autenticado e possua o token nos cookies.
 */
export async function getUserPackages() {
  try {
    const response = await fetch(`${config.apiBaseUrl}/user/my-packages`, {
      method: "GET",
      credentials: "include", // 🔥 Envia cookies para autenticação
    });

    const data = await response.json();

    if (!response.ok || data.status !== "success") {
      // Backend pode retornar algo como { status: "error", message: "..." }
      throw new Error(data.message || "Erro ao buscar pacotes.");
    }

    // Retornamos o array de pacotes
    return data.data || [];
  } catch (error) {
    console.error("Erro ao buscar pacotes do usuário:", error);
    throw error; // você pode tratar esse erro na página
  }
}
