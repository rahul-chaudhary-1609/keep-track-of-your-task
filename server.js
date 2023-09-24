// importing external modules
import express from "express";

// importing internal modules
import { RESPONSE_CODES, RESPONSE_MESSAGES, SERVER_CONFIG } from "./config/constants.js";
import { dbAuthenticate } from "./config/db.config.js";
import router from "./routes/routes.js";
import { errorResponse } from "./utils/responseHandler.js";

const App = express();

App.use(express.urlencoded({
    extended:false,
    limit:"50mb"
}))

App.use(express.json())

App.use(router);

App.use((error,req,res,next)=>{
    errorResponse(req,res,RESPONSE_CODES.NOT_FOUND,RESPONSE_MESSAGES.NOT_FOUND,error);
})


App.listen(SERVER_CONFIG.PORT,SERVER_CONFIG.HOST,(error)=>{
    if(error){
        console.log("Something went wrong")
    }else{
        dbAuthenticate();
        console.log(`Server has started and listening at http://${SERVER_CONFIG.HOST}:${SERVER_CONFIG.PORT}`)
    }
})

