import { config } from "../../../../config/config";

export interface Package {
    _id: string;
    mobile_service?: "Pré-pago" | "Pós-pago";
    mobile_service_amount?: number;
    fiber?: "Básico" | "Intermediário" | "Família";
    fiber_amount?: number;
    streaming_partnership?: "GloboPlay" | "HBO Max";
    fixed_phone?: boolean;
    price: number;
    is_b2b: boolean;
}

export async function listPackages(): Promise<{ data: Package[]; response: Response }> {
    const options: RequestInit = {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await fetch(`${config.apiBaseUrl}/admin/list-packages`, options);
    const data = await response.json();

    return { data: data.data || [], response };
}
