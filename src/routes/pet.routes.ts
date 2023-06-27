import Express, { Router } from "express";
import { createPet, addImage, getPet, getPets } from '../controller/pet.controller';
import { schemaValidation } from '../middlewares/validator.middleware';
import { petSchema } from '../schemas/pet.schema';
const router: Router = Express.Router();

router
    .get("/", getPets)
    .get("/:name", getPet)
    .post('/create', schemaValidation(petSchema), createPet)
    .post('/addImage', addImage)

export default router; 