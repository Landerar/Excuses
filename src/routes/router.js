import {Router} from "express";

import userRouter from "./userRouter.js";
import excusesRouter from "./excusesRouter.js";

const router = Router();

router.get("/",(req,res)=>{
    res.json({data:"hello api"});
})
router.use("/users", userRouter);
router.use("/excuses",excusesRouter);

export default router;