//import internal modules
import { RESPONSE_CODES, RESPONSE_MESSAGES } from "../config/constants.js";
import { errorResponse } from "../utils/responseHandler.js";

export function validateBody(schema){
    return function(req,res,next){
        let {error , value} = schema.validate(req.body,{abortEarly:false});
        if(error){
            errorResponse(req,res,RESPONSE_CODES.BAD_REQUEST,RESPONSE_MESSAGES.INVALID_REQUEST,error)
        }else{
            next()
        }
    }
}

export function validateQueryParams(schema){
    return function(req,res,next){
        let {error , value} = schema.validate(req.query,{abortEarly:false});
        if(error){
            errorResponse(req,res,RESPONSE_CODES.BAD_REQUEST,RESPONSE_MESSAGES.INVALID_REQUEST,error)
        }else{
            next()
        }
    }
}