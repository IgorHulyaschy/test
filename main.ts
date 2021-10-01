import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import { IController } from "./interfaces";

const controller = myContainer.get<IController>(TYPES.IController);

controller.create('2');