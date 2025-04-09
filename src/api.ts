import axios from "axios";
import { WrikeTask } from "./types";
import "dotenv/config";
import { handleError } from "./utils";

const TOKEN = process.env.WRIKE_TOKEN as string;

export async function fetchTasks(): Promise<WrikeTask[] | undefined> {
  try {
    const response = await axios.get<{ data: WrikeTask[] }>(
      "https://www.wrike.com/api/v4/tasks?fields=[responsibleIds,parentIds]",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    handleError(error, "Error fetching tasks");
  }
}
