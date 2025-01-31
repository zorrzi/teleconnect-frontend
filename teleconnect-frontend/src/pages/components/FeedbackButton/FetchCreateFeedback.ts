// src/components/FeedbackButton/FetchCreateFeedback.ts
import { config } from "../../../config/config";

export async function submitFeedback(feedbackText: string, stars: number) {
  const response = await fetch(`${config.apiBaseUrl}/user/feedback`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ feedback_text: feedbackText, stars }),
  });

  const data = await response.json();
  if (!response.ok || data.status !== "success") {
    throw new Error(data.message || "Erro ao enviar feedback");
  }
  return data;
}
