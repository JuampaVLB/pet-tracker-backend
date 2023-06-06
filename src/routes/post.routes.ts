import Express, { Router } from "express";
import { sendPost, sendComment, getPosts, getComments, deletePost } from "../controller/post.controller";
import { schemaValidation } from '../middlewares/validator.middleware';
import { postSchema } from '../schemas/post.schema';
const router: Router = Express.Router();

router.post('/send/post', schemaValidation(postSchema), sendPost)
router.post('/send/comment', sendComment)
router.get('/all/post', getPosts)
router.get('/all/comment/:room', getComments)
router.delete('/p/:room', deletePost)

export default router;