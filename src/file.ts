import fs from "fs/promises";
import { MappedTask } from "./types";
import { handleError } from "./utils";

export async function writeTasksToFile(tasks: MappedTask[]): Promise<void> {
  try {
    await fs.writeFile("tasks.json", JSON.stringify(tasks, null, 2));
    console.log("Tasks successfully written");
  } catch (error) {
    handleError(error, "Error writing tasks to file");
  }
}
