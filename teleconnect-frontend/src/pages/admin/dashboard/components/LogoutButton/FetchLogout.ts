import { config } from "../../../../../config/config";

export const LogoutAdmin = async (): Promise<boolean> => {
    try {
        const response = await fetch(`${config.apiBaseUrl}/director/auth/logout`, {
            method: "POST",
            credentials: "include", // Garante envio de cookies
        });

        if (!response.ok) {
            throw new Error("Erro ao fazer logout");
        }

        return true; // Logout bem-sucedido
    } catch (error) {
        console.error("Erro ao fazer logout:", error);
        return false;
    }
};
