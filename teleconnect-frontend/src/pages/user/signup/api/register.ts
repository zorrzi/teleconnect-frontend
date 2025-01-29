import { config } from "../../../../config/config";

// Função para registrar um novo usuário
export const registerUser = async (userData: {
    cpf: string;
    phone: string;
    email: string;
    password: string;   
    name: string;
}) => {
    const response = await fetch(`${config.apiBaseUrl}/user/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.detail || "Erro no registro");
    }

    return data;
};
