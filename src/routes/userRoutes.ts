import {Router} from "express";
import * as userController from "../controller/userControler";

const router = Router();

router.post("/", userController.createUser);
router.get("/", userController.list);
router.put("/:id", userController.update);
router.delete("/:id", userController.deleteUser);

export default router;