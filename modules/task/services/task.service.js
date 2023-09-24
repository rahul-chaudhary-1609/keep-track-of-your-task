//import internal modules
import taskModel from "../models/task.model.js"

export async function addtask(params){
    let createQueryObj ={
        name:params.name,
        description:params.description,
    }

    let taskData = await taskModel.addTask(createQueryObj);

    return taskData;
}

export async function gettask(params){
    let getQueryObj ={}

    let taskData = await taskModel.getTask(getQueryObj);

    return taskData;
}