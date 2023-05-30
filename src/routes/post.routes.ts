import Express, { Router } from "express";
import { sendPost, test, getPosts } from "../controller/post.controller";
const router: Router = Express.Router();

router.post('/send', sendPost)
router.post('/test', test)
router.get('/all', getPosts)

export default router;