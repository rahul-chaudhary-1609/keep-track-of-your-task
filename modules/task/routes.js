//import external modules
import express from "express";

//import internal modules
import * as taskController from "./controllers/task.controller.js";
import { addTaskScheme, getTaskMetricsScheme, getTaskScheme, updateTaskScheme } from "./validationSchema.js";
import { validateBody, validateQueryParams } from "../../middlewares/requestValidator.js";

const taskRouter = express.Router();

taskRouter.post("/add-task", validateBody(addTaskScheme), taskController.addTask);
taskRouter.get("/get-task",validateQueryParams(getTaskScheme),taskController.getTask);
taskRouter.put("/update-task",validateBody(updateTaskScheme),taskController.updateTask);
taskRouter.get("/get-task-metrics",validateQueryParams(getTaskMetricsScheme),taskController.getTaskMetrics);

export default taskRouter;