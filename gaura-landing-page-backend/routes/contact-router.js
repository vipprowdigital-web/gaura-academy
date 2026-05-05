import { Router } from "express";
import { contact } from "../controllers/contact-controller.js";
import { validateMiddleware } from "../middlewares/validate.js";
import { contactSchema } from "../validations/contact-validation.js";

const router = Router();

router.post("/", validateMiddleware(contactSchema), contact);

export default router;
