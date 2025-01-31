// import { config } from "../../../../config/config";

// export const fetchUserPlans = async () => {
//   try {
//     const response = await fetch(`${config.apiBaseUrl}/user/plans`, {
//       method: "GET",
//       credentials: "include", // Garante envio de cookies
//     });

//     if (!response.ok) {
//       throw new Error("Erro ao carregar planos");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
