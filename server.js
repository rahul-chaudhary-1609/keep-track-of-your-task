// importing external modules
import express from "express";

// importing internal modules
import { SERVER_CONFIG } from "./config/constants.js";

const App = express();

App.get('/',(req,res)=>{
    res.send("This is task app");
})


App.listen(SERVER_CONFIG.PORT,SERVER_CONFIG.HOST,(error)=>{
    if(error){
        console.log("Something went wrong")
    }else{
        console.log(`Server has started and listening at http://${SERVER_CONFIG.HOST}:${SERVER_CONFIG.PORT}`)
    }
})

