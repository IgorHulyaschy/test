export interface Task {
  task: string;
  time: Date;
}

export interface IController {
  create(task: string): Promise<void>;
}

export interface IService {
  createTask(task:string): Promise<void>;
}

export interface IDao {
  addtodb(data: Task): Promise<void>;
}