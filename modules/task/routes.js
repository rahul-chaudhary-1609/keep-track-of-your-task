//import external modules
import express from "express";

//import internal modules
import * as taskController from "./controllers/task.controller.js";

const taskRouter = express.Router();

taskRouter.post("/add-task",taskController.addtask);
taskRouter.get("/get-task",taskController.gettask);

export default taskRouter;