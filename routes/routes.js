//import external modules
import express from "express";

//import internal modules
import taskRouter from "../modules/task/routes.js";

const router = express.Router();

router.use("/task",taskRouter);
router.use("/health",(req,res,next)=>{
    res.send("OK")
})
router.use((req,res,next)=>{
    next(Error("Methon not found"));
})

export default router;