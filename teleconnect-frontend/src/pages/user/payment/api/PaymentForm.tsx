import { config } from "../../../../config/config";

/**
 * Faz a requisição ao backend para adicionar um pacote à conta do usuário.
 * É necessário que o usuário já esteja autenticado e possua um token nos cookies.
 */
export async function addPackageToUser(packageId: string) {
  if (!packageId) {
    return { success: false, message: "Nenhum pacote selecionado." };
  }

  try {
    // Ajuste a rota de acordo com seu backend (Ex: '/user/buy-package' ou '/user/add-package')
    const response = await fetch(`${config.apiBaseUrl}/user/add-package`, {
      method: "POST",
      credentials: "include", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        packageId: packageId     // <--- _id do pacote
      })
    });

    const data = await response.json();

    if (!response.ok) {
      // Backend pode retornar algo como { status: "error", message: "..." }
      return {
        success: false,
        message: data.message || "Falha ao adicionar pacote.",
      };
    }

    // Caso o backend retorne: { "status": "success", ... }
    return {
      success: data.status === "success",
      message: data.message,
      data,
    };
  } catch (error) {
    console.error("Erro ao adicionar pacote:", error);
    return {
      success: false,
      message: (error as Error).message || "Erro inesperado.",
    };
  }
}
