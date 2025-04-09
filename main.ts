import { fetchTasks } from "./src/api";
import { writeTasksToFile } from "./src/file";
import { mapTasks } from "./src/mapper";

async function getTasks(): Promise<void> {
  const tasks = await fetchTasks();
  if (!tasks) {
    console.error("No tasks received from Wrike API.");
    return;
  }
  const mappedTasks = mapTasks(tasks);
  await writeTasksToFile(mappedTasks);
}

getTasks();
