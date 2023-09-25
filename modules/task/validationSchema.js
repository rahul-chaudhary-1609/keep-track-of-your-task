//import external modules
import Joi from "joi";


export const addTaskScheme = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    status:Joi.number().valid(1,2).required(),
})

export const updateTaskScheme = Joi.object({
    task_id:Joi.number().required(),
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    status:Joi.number().valid(0,1,2,3,4,5).optional(),
})

export const getTaskScheme = Joi.object({
    status:Joi.number().valid(0,1,2,3,4,5).optional(),
    page_size:Joi.number().min(1).required(),
    page_no:Joi.number().min(1).required(),    
})

export const getTaskMetricsScheme = Joi.object({
    start_date:Joi.date().optional(),
    end_date:Joi.date().optional(),
})