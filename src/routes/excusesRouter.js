import {Router} from "express";

import excusesApiController from "../controllers/excuses/excusesApiController.js";


const router = Router();

router.get("/", excusesApiController.getAll);
router.get("/byproperty",excusesApiController.getByProperty);
router.get("/:id", excusesApiController.getById);
router.post("/", excusesApiController.create);
router.put("/:id",excusesApiController.update);
router.delete("/:id",excusesApiController.remove);

export default router;