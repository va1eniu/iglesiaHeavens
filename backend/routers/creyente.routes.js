import { getCreyente, postCreyente} from "../controllers/creyente.controller.js";
import { Router } from "express";
import { validateDocuments } from "../middlewares/validate.documents.js";
import { check } from "express-validator";

const router = Router();

router.get("/", getCreyente);

router.post("/",[
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("edad","la edad es requerida").not().isEmpty(),  validateDocuments
], postCreyente)

export default router;