import { config } from "../../../../config/config";

// Função para login do diretor
export const loginDirector = async (email: string, password: string) => {
    const response = await fetch(`${config.apiBaseUrl}/director/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include", // 🔥 Garante envio de cookies
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.detail || "Erro no login do diretor");
    }

    return data;
};
