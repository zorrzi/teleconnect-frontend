// src/pages/user/feedback/api/submitFeedback.ts
import { config } from "../../../config/config";

/**
 * Faz a requisição ao backend para enviar o feedback do usuário logado.
 * É necessário que o usuário já esteja autenticado e possua o token nos cookies.
 */
export async function submitFeedback(feedbackText: string, stars: number) {
  try {
    const response = await fetch(`${config.apiBaseUrl}/user/feedback`, {
      method: "POST",
      credentials: "include", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        feedback_text: feedbackText,
        stars,
      }),
    });

    const data = await response.json();

    if (!response.ok || data.status !== "success") {
      // Backend pode retornar algo como { status: "error", message: "..." }
      throw new Error(data.message || "Erro ao enviar feedback.");
    }

    // Retornamos os dados do feedback criado
    return data;
  } catch (error) {
    console.error("Erro ao enviar feedback:", error);
    throw error; // Você pode tratar esse erro no componente
  }
}
