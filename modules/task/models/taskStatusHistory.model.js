//import external modules
import sequelize from "sequelize";

//import internal modules
import { sequelizeConnection } from "../../../config/db.config.js";
import { DB_CONSTANTS } from "../../../config/constants.js";

const taskStatusHistoryModel = await sequelizeConnection.define(DB_CONSTANTS.TABLES.TASK_STATUS_HISTORY,{
    id:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    task_id:{
        type: sequelize.INTEGER,
        allowNull: false,
    },
    status:{
        type: sequelize.INTEGER,
        allowNull: false,
    }
},{
    timestamps: true,
    tableName: DB_CONSTANTS.TABLES.TASK_STATUS_HISTORY
})


// taskStatusHistoryModel.sync({alter:true});

taskStatusHistoryModel.addTaskStatusHistory = function(query){
    return new Promise((resolve,reject)=>{
        taskStatusHistoryModel.create(query)
        .then((data)=>resolve(data.get({plain:true})))
        .catch((error)=>reject(error));
    })
}

taskStatusHistoryModel.getTaskMetrics = function(params){
    return new Promise((resolve,reject)=>{

        let _replacement = {
            status: params.status,
        }

        let _where = ` status = :status`;

        if(params.start_date && params.end_date){
            _where += ` AND DATE_FORMAT(createdAt,"%Y-%m") BETWEEN :start_date AND :end_date`
            _replacement = {
                ..._replacement,
                start_date: params.start_date,
                end_date: params.end_date,
            }
        }

        let _sql = `SELECT COUNT(id) AS count, DATE_FORMAT(createdAt,"%M %Y") AS date, :status AS status FROM ${DB_CONSTANTS.TABLES.TASK_STATUS_HISTORY}
        WHERE ${_where} GROUP BY DATE_FORMAT(createdAt,"%M %Y")`;

        sequelizeConnection.query(_sql,{
            replacements:_replacement,
            type:sequelize.QueryTypes.SELECT,
            model:taskStatusHistoryModel,
            raw:true
        })
        .then((data)=>resolve(data))
        .catch((error)=>reject(error));
    })
}

export default taskStatusHistoryModel;