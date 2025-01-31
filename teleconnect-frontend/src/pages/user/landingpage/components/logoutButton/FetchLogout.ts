import { config } from "../../../../../config/config";

export const LogoutUser = async (): Promise<boolean> => {
    try {
        const response = await fetch(`${config.apiBaseUrl}/user/auth/logout`, {
            method: "POST",
            credentials: "include", // Garante envio de cookies
        });

        if (!response.ok) {
            console.error("Erro na resposta do logout:", response.status, response.statusText);
            throw new Error(`Erro ao fazer logout: ${response.statusText}`);
        }

        return true; // Logout bem-sucedido
    } catch (error) {
        console.error("Erro ao fazer logout:", error);
        return false;
    }
};




