import express from "express";
import { create, get, getAll, remove, update } from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();

router.post("/categories", create);
router.get("/categories/:id", get);
router.get("/categories", getAll);
router.delete("/categories/:id", remove);
router.put("/categories/:id", update);

export default router;
