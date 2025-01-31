import { config } from "../../config/config";

export const ValidateSession = async (): Promise<boolean> => {
    try {
        const response = await fetch(`${config.apiBaseUrl}/user/auth/check/token`, {
            method: "POST",
            credentials: "include", 
        });

        if (!response.ok) {
            throw new Error("Token inválido ou expirado");
        }

        return true; 
    } catch (error) {
        return false; 
    }
};
