import type { ApiResponse } from "@/types/api";
import { client } from "./client";

export type ContactMessage = {
  name: string;
  email: string;
  organization?: string;
  message: string;
};

export function sendContactMessage(
  data: ContactMessage,
): Promise<ApiResponse<{ received: boolean }>> {
  return client.post("/v1/contact-messages", data);
}
