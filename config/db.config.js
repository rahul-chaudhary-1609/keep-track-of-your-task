//import external modules
import sequelize,{Sequelize} from "sequelize";

//import internal modules
import { DB_CONFIG } from "./constants.js";
import { getErrorFromErrorObj } from "../utils/helperFunction.js";


const SequelizeConnection = new Sequelize({
    host: DB_CONFIG.HOST,
    port:DB_CONFIG.PORT,
    dialect:DB_CONFIG.DIALECT,
    username:DB_CONFIG.USER_NAME,
    password:DB_CONFIG.PASSWORD,
    database:DB_CONFIG.DATABASE,    
})


export function dbAuthenticate(){
    SequelizeConnection.authenticate().then((db)=>{
        console.log("Connection Successfull",db)
    }).catch((error)=>{
        console.log("DB connect error",getErrorFromErrorObj(error));
    })
}
