import {Router} from "express";

import userRouter from "./userRouter.js";
import excuseRouter from "./excuseRouter";

const router = Router();

router.get("/",(req,res)=>{
    res.json({data:"hello api"});
})
router.use("/users", userRouter);
router.use("/excuses",excuseRouter);
export default router;