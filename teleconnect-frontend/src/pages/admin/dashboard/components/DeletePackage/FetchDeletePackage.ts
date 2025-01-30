import { config } from "../../../../../config/config";

export const deletePackage = async (packageId: string) => {
    const response = await fetch(`${config.apiBaseUrl}/admin/delete-package/${packageId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Erro ao deletar o pacote");
    }

    return data;
};
