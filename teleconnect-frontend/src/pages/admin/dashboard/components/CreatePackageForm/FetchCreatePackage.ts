import { config } from "../../../../../config/config";

export interface CreatePackagePayload {
    mobile_service?: "Pré-pago" | "Pós-pago" | "";
    mobile_service_amount?: number | "";
    fiber?: "Básico" | "Intermediário" | "Família" | "";
    fiber_amount?: number | "";
    streaming_partnership?: "GloboPlay" | "Premiere" | "";
    fixed_phone?: boolean | "";
    price: number;
    is_b2b: boolean;
}

export async function createPackage(
    payload: CreatePackagePayload
): Promise<{ data: any; response: Response }> {
    // Remove campos vazios ou inválidos do payload
    const sanitizedPayload = Object.entries(payload).reduce((acc, [key, value]) => {
        if (value !== "" && value !== undefined) {
            acc[key] = value;
        }
        return acc;
    }, {} as Record<string, any>);

    const options: RequestInit = {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedPayload),
    };

    const response = await fetch(`${config.apiBaseUrl}/admin/create-package`, options);
    const data = await response.json();

    return { data, response };
}
