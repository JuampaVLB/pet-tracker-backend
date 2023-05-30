import Express, { Router } from "express";
import { sendPost, test, getPosts } from "../controller/post.controller";
import { schemaValidation } from '../middlewares/validator.middleware';
import { postSchema } from '../schemas/post.schema';
const router: Router = Express.Router();

router.post('/send', schemaValidation(postSchema), sendPost)
router.post('/test', schemaValidation(postSchema), test)
router.get('/all', getPosts)

export default router;