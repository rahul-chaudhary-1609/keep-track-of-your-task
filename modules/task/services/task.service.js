//import internal modules
import taskModel from "../models/task.model.js"
import taskStatusHistoryModel from "../models/taskStatusHistory.model.js";

export async function addTask(params){
    let createQueryObj ={
        name:params.name,
        description:params.description,
        status:params.status,
    }
    let taskData = await taskModel.addTask(createQueryObj);

    if(taskData){
        createQueryObj = {
            task_id: taskData.id,
            status: taskData.status,
        }    
        await taskStatusHistoryModel.addTaskStatusHistory(createQueryObj);
    }

    return taskData;
}


export async function updateTask(params){

    let taskData = await taskModel.getAll(params);

    let taskUpdateData = await taskModel.updateTask({...params});

    if(taskData && taskData[0] && taskData[0].status != params.status){
        if(taskUpdateData){
            let createQueryObj = {
                task_id: params.task_id,
                status: params.status,
            }    
            await taskStatusHistoryModel.addTaskStatusHistory(createQueryObj);
        }
    }

    return taskUpdateData;
}

export async function getTask(params){
    let getQueryObj ={
        page_size: parseInt(params.page_size),
        page_no: parseInt(params.page_no)
    }

    if(params.status){
        getQueryObj.status = params.status;
    }

    let taskData = await taskModel.getPaginatedTask(getQueryObj);

    return taskData;
}

export async function getTaskMetrics(params){
    let statusObj = {
        "open_tasks": 2,
        "inprogress_tasks": 3,
        "completed_tasks": 4,
    }
    let getQueryObj ={
        ...params,
    }

    let allTaskStatusHistory = []
    let metricDates = [];
    let taskData = {};

    let allMetrics = [];
    for(let status in statusObj){
        getQueryObj = {
            ...getQueryObj,
            status: statusObj[status]
        }
        taskData = await taskStatusHistoryModel.getTaskMetrics(getQueryObj);

        if(taskData && Array.isArray(taskData)){
            allTaskStatusHistory.push(...taskData)

            for(let ele of taskData){
                if(!metricDates.includes(ele.date)){
                    metricDates.push(ele.date)
                }
            }
        }
    }

    for(let date of metricDates){
        let metricsObj = {date:date,metrics:{}}
        for(let status in statusObj){
            let s = allTaskStatusHistory.find(h => (h.status == statusObj[status] && h.date == date));
            if(s){
                metricsObj.metrics[status] = s.count;
            }else{
                metricsObj.metrics[status] = 0;
            }
            
        }
        allMetrics.push(metricsObj);
    }

    return allMetrics; 
}