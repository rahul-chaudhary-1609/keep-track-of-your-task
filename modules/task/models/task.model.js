//import external modules
import sequelize from "sequelize";

//import internal modules
import { sequelizeConnection } from "../../../config/db.config.js";
import { DB_CONSTANTS } from "../../../config/constants.js";
import taskStatusHistoryModel from "./taskStatusHistory.model.js";

const taskModel = sequelizeConnection.define(DB_CONSTANTS.TABLES.TASKS,{
    id:{
        type: sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
    },
    name:{
        type: sequelize.STRING,
        allowNull:false
    },
    description:{
        type:sequelize.TEXT,
        allowNull:true,
    },
    status:{
        type:sequelize.TINYINT,
        allowNull:false,
        defaultValue:1,
        comment:"0=> inactive, 1=> active, 2=> open, 3=> in_progress, 4=> completed"
    },
},{
    timestamps:true,
    tableName: DB_CONSTANTS.TABLES.TASKS,
})

taskModel.hasMany(taskStatusHistoryModel,{foreignKey:"task_id"});

// taskModel.sync({alter:true});

taskModel.addTask = function(query){
    return new Promise((resolve,reject)=>{
        taskModel.create(query)
        .then((data)=>resolve(data.get({plain:true})))
        .catch((error)=>reject(error));
    })
}

taskModel.updateTask = function(params){
    return new Promise((resolve,reject)=>{
        let queryObj = {
            where:{
                id:params.task_id,
            },
            returning:true,
            plain:true
        }

        delete params.task_id;
        let updateData = {...params};

        taskModel.update(updateData,queryObj)
        .then((data)=>resolve(data))
        .catch((error)=>reject(error));
    })
}

taskModel.getAll = function(params){
    return new Promise((resolve,reject)=>{
        let queryObj = {
            where:{id:params.task_id},
            raw:true,
        }
        taskModel.findAll(queryObj)
        .then((data)=>resolve(data))
        .catch((error)=>reject(error));
    })
}

taskModel.getPaginatedTask = function(query){
    return new Promise((resolve,reject)=>{

        let queryObj = {
            where:{},
            limit: query.page_size,
            offset: query.page_size * (query.page_no-1)
        }

        if(query.status){
            queryObj.where.status = query.status;
        }

        taskModel.findAll(queryObj)
        .then((data)=>resolve(data))
        .catch((error)=>reject(error));
    })
}

export default taskModel;