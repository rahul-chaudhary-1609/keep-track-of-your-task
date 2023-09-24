//import internal modules

import { RESPONSE_CODES, RESPONSE_MESSAGES } from "../../../config/constants.js";
import { deepCopy } from "../../../utils/helperFunction.js";
import { errorResponse, successResponse } from "../../../utils/responseHandler.js";
import * as taskServices from "../services/task.service.js";

export async function addtask(req,res,next){
    try {
        let params = deepCopy(req.body);
        let taskData = await taskServices.addtask(params);
        successResponse(req,res,RESPONSE_CODES.CREATED,RESPONSE_MESSAGES.TASK.CREATED,taskData)
    } catch (error) {
        errorResponse(req,res,RESPONSE_CODES.INTERNAL_SERVER_ERROR,RESPONSE_MESSAGES.ERROR_DEFAULT,error);
    }
}

export async function gettask(req,res,next){
    try {
        let params = deepCopy(req.body);
        let taskData = await taskServices.gettask(params);
        successResponse(req,res,RESPONSE_CODES.SUCCESS,RESPONSE_MESSAGES.SUCCESS_DEFAULT,taskData)
    } catch (error) {
        errorResponse(req,res,RESPONSE_CODES.INTERNAL_SERVER_ERROR,RESPONSE_MESSAGES.ERROR_DEFAULT,error);
    }
}