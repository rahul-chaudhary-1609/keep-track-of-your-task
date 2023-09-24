//import external modules
import sequelize from "sequelize";

//import internal modules
import { sequelizeConnection } from "../../../config/db.config.js";


const taskModel = sequelizeConnection.define("tasks",{
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
        comment:"0=> inactive, 1=> active, 2=> open, 3=> in_progress, 4=> completed, 5=> closed"
    },
},{
    timestamps:true,
    tableName: "tasks"
})

taskModel.sync({alter:true});

taskModel.addTask = function(query){
    return new Promise((resolve,reject)=>{
        taskModel.create(query)
        .then((data)=>resolve(data))
        .catch((error)=>reject(error))
    })
}

taskModel.getTask = function(query){
    return new Promise((resolve,reject)=>{
        taskModel.findAll(query)
        .then((data)=>resolve(data))
        .catch((error)=>reject(error))
    })
}

export default taskModel;