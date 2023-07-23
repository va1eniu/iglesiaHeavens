import { getCreyente } from "../controllers/creyente.controller.js";
import { Router } from "express";

const router = Router();

router.get("/", getCreyente);

export default router;