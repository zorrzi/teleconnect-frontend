import { config } from "../../../../config/config";

// Função para login do usuário
export const loginUser = async (email: string, password: string) => {
    const response = await fetch(`${config.apiBaseUrl}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include", // 🔥 Garante envio de cookies
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.detail || "Erro no login");
    }

    return data;
};
