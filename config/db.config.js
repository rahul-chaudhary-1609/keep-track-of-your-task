//import external modules
import sequelize from "sequelize";

//import internal modules
import { DB_CONFIG } from "./constants.js";
import { getErrorFromErrorObj } from "../utils/helperFunction.js";


export const sequelizeConnection = new sequelize({
    host: DB_CONFIG.HOST,
    port:DB_CONFIG.PORT,
    dialect:DB_CONFIG.DIALECT,
    username:DB_CONFIG.USER_NAME,
    password:DB_CONFIG.PASSWORD,
    database:DB_CONFIG.DATABASE,    
})


export function dbAuthenticate(){
    sequelizeConnection.authenticate().then((db)=>{
        console.log("Database connection successfull")
    }).catch((error)=>{
        console.log("DB connect error",getErrorFromErrorObj(error));
    })
}