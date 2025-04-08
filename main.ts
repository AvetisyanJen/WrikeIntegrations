import axios from 'axios';
import { MappedTask, WrikeTask } from './types';
import 'dotenv/config';

const TOKEN = process.env.WRIKE_TOKEN as string;

async function getTasks(): Promise<void> {
  try {
    const response = await axios.get<{ data: WrikeTask[] }>(
      'https://www.wrike.com/api/v4/tasks?fields=[responsibleIds,parentIds]',
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
  
    const tasks = response.data.data;
 
    const mappedTasks: MappedTask[] = tasks.map((task) => ({
      id: task.id,
      name: task.title,
      assignees: task.responsibleIds ?? [], 
      status: task.status,
      collections: task.parentIds ?? [],
      created_at: task.createdDate,
      updated_at: task.updatedDate,
      ticket_url: task.permalink,
    }));
    console.log('Original:', tasks[0]);
    console.log('Mapped:', mappedTasks[0]);
    // console.log(mappedTasks);
  } catch (error: any) {
    console.error('Error fetching tasks:', error.message);
  }
}

getTasks();
