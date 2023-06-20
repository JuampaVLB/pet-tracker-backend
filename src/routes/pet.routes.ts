import Express, { Router } from "express";
import { createPet } from '../controller/pet.controller';
import { schemaValidation } from '../middlewares/validator.middleware';
import { petSchema } from '../schemas/pet.schema';
const router: Router = Express.Router();

router
    .get("/", schemaValidation(petSchema), createPet)
    .post('/create', schemaValidation(petSchema), createPet)

export default router; 