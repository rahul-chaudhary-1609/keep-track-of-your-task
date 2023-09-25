//import internal modules

import { RESPONSE_CODES, RESPONSE_MESSAGES } from "../../../config/constants.js";
import { deepCopy } from "../../../utils/helperFunction.js";
import { errorResponse, successResponse } from "../../../utils/responseHandler.js";
import * as taskServices from "../services/task.service.js";

export async function addTask(req,res,next){
    try {
        let params = deepCopy(req.body);
        let taskData = await taskServices.addTask(params);
        successResponse(req,res,RESPONSE_CODES.CREATED,RESPONSE_MESSAGES.TASK.CREATED,taskData)
    } catch (error) {
        errorResponse(req,res,RESPONSE_CODES.INTERNAL_SERVER_ERROR,RESPONSE_MESSAGES.ERROR_DEFAULT,error);
    }
}

export async function updateTask(req,res,next){
    try {
        let params = deepCopy(req.body);
        let taskData = await taskServices.updateTask(params);
        successResponse(req,res,RESPONSE_CODES.CREATED,RESPONSE_MESSAGES.SUCCESS_DEFAULT,taskData)
    } catch (error) {
        errorResponse(req,res,RESPONSE_CODES.INTERNAL_SERVER_ERROR,RESPONSE_MESSAGES.ERROR_DEFAULT,error);
    }
}

export async function getTask(req,res,next){
    try {
        let params = deepCopy(req.query);
        let taskData = await taskServices.getTask(params);
        successResponse(req,res,RESPONSE_CODES.SUCCESS,RESPONSE_MESSAGES.SUCCESS_DEFAULT,taskData)
    } catch (error) {
        errorResponse(req,res,RESPONSE_CODES.INTERNAL_SERVER_ERROR,RESPONSE_MESSAGES.ERROR_DEFAULT,error);
    }
}

export async function getTaskMetrics(req,res,next){
    try {
        let params = deepCopy(req.query);
        let taskData = await taskServices.getTaskMetrics(params);
        successResponse(req,res,RESPONSE_CODES.SUCCESS,RESPONSE_MESSAGES.SUCCESS_DEFAULT,taskData)
    } catch (error) {
        errorResponse(req,res,RESPONSE_CODES.INTERNAL_SERVER_ERROR,RESPONSE_MESSAGES.ERROR_DEFAULT,error);
    }
}