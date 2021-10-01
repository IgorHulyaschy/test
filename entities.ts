import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { IController, IService, IDao, Task } from './interfaces';
import { TYPES } from './types';
import Todo from './db';
import { connect } from 'mongoose';

@injectable()
class Controller implements IController {
  private _service: IService;
  constructor(
    @inject(TYPES.IService) service: IService,
  ) {
    this._service = service;
  }
  async create(task: string): Promise<void> {
    this._service.createTask(task);
  }
}

@injectable()
class Dao implements IDao {
  async addtodb(data: Task): Promise<void> {
    const todo = new Todo(data)
    const db: any = () =>  connect('mongodb://localhost:27017/test', () => {
      console.log('connected');
    });
    try{
      db();
    } catch(err) {
      console.log(err);
    }
    await todo.save();
  }
}

@injectable()
class Service implements IService {
  private _dao: IDao;
  constructor(
    @inject(TYPES.IDao) dao: IDao,
  ) {
    this._dao = dao;
  }
  async createTask(task: string): Promise<void> {
    const data = {
      task,
      time: new Date(),
    };
    this._dao.addtodb(data);
  }
}

export { Controller, Dao, Service };