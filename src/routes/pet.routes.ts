import Express, { Router } from "express";
import { createPet } from '../controller/pet.controller';
// import { tokenValidation } from '../middlewares/verifyToken.middleware';
// import { schemaValidation } from '../middlewares/validator.middleware';
// import { loginSchema, registerSchema } from '../schemas/auth.schema';
const router: Router = Express.Router();

router
    .get("/", createPet)
    .post('/create', createPet)

export default router; 