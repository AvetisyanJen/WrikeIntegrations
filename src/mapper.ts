import { WrikeTask, MappedTask } from "./types";

export function mapTasks(tasks: WrikeTask[]): MappedTask[] {
  return tasks.map((task) => ({
    id: task.id,
    name: task.title,
    assignees: task.responsibleIds ?? [],
    status: task.status,
    collections: task.parentIds ?? [],
    created_at: task.createdDate,
    updated_at: task.updatedDate,
    ticket_url: task.permalink,
  }));
}
