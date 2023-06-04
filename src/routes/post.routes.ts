import Express, { Router } from "express";
import { sendPost, sendComment, getPosts, getComments } from "../controller/post.controller";
import { schemaValidation } from '../middlewares/validator.middleware';
import { postSchema } from '../schemas/post.schema';
const router: Router = Express.Router();

router.post('/send/post', schemaValidation(postSchema), sendPost)
router.post('/send/comment', sendComment)
router.get('/all/post', getPosts)
router.get('/all/comment/:room', getComments)

export default router;