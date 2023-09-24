//exporting internal modules 
import { RESPONSE_CODES, RESPONSE_STATUS_TEXT } from "../config/constants.js";
import { getErrorFromErrorObj } from "./helperFunction.js";


export function errorResponse(req,res,statusCode,message,error){
    let errorResponseObj = {};
    let errorStatusCode = statusCode || RESPONSE_CODES.INTERNAL_SERVER_ERROR;
    errorResponseObj.statusCode = errorStatusCode || RESPONSE_CODES.INTERNAL_SERVER_ERROR,
    errorResponseObj.statusText = RESPONSE_STATUS_TEXT[errorStatusCode];
    errorResponseObj.message = message;
    errorResponseObj.error = getErrorFromErrorObj(error);

    res.status(errorStatusCode).json(errorResponseObj);
}

export function successResponse(req,res,statusCode,message,data={}){
    let responseObj = {};
    let successStatusCode = statusCode || RESPONSE_CODES.INTERNAL_SERVER_ERROR;
    responseObj.statusCode = successStatusCode || RESPONSE_CODES.INTERNAL_SERVER_ERROR,
    responseObj.statusText = RESPONSE_STATUS_TEXT[successStatusCode];
    responseObj.message = message;
    responseObj.data = data;

    res.status(successStatusCode).json(responseObj);
}

