import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import { IController, IService, IDao } from "./interfaces";
import { expect } from "chai";

const service = myContainer.get<IService>(TYPES.IService);
const dao = myContainer.get<IDao>(TYPES.IDao);
const controller = myContainer.get<IController>(TYPES.IController);

describe('service', () => {
  it('should return an array', () => {
    expect(service.createTask('task'))
      .to.be.an('array')
  })
})
describe('dao', () => {
  it('return an array with object   = {time, task}', () => {
    const time = new Date();
    const task = 'todo';
    const data = {
      task: task,
      time: time,
    }
    expect(dao.addtodb(data))
    .to.be.an('array')
    .to.deep.include({
      task: task,
      time: time,
    })
  })
})

describe('controller', () => {
  it('return an array', () => {
    const task = 'todo';
    expect(controller.create(task)).to.be.an('array')
  })
})

