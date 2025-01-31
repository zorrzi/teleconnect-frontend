// src/components/FeedbackButton/FetchCreateFeedback.ts
import { config } from "@/config/config";

// src/feedback/api/feedbackApi.ts
export async function listAllFeedbacks() {
  const response = await fetch(`${config.apiBaseUrl}/user/feedback`, { credentials: "include" });
  const data = await response.json();
  if (!response.ok || data.status !== "success") {
    throw new Error(data.message || "Falha ao carregar feedbacks");
  }
  return data.feedbacks; // Se for "data.feedbacks"
}
