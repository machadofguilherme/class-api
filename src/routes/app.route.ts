import { Router } from "express";
import appController from "../controller/app.controller";

const AppRouter = Router();

const AppController = new appController();

AppRouter.get('/', (req, res) => AppController.findAll(req, res));

export default AppRouter;