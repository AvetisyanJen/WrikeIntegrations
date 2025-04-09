import axios from "axios";

export function handleError(
  error: unknown,
  contextMessage = "Unexpected error"
): void {
  if (axios.isAxiosError(error)) {
    console.error(`${contextMessage}:`, error.response?.data || error.message);
  } else if (error instanceof Error) {
    console.error(`${contextMessage}:`, error.message);
  } else {
    console.error(`${contextMessage}:`, error);
  }
}
