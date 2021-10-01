import { Container } from 'inversify';
import { TYPES } from './types';
import  { IController, IService, IDao } from './interfaces';
import { Controller, Service, Dao } from './entities';

const myContainer = new Container();
myContainer.bind<IController>(TYPES.IController).to(Controller);
myContainer.bind<IService>(TYPES.IService).to(Service);
myContainer.bind<IDao>(TYPES.IDao).to(Dao);

export { myContainer };
