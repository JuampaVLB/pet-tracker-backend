import { Request, Response } from 'express';
import Post, { IPost } from '../models/post.model';
import { v4 as uuidv4 } from 'uuid';

export const sendPost = async (req: Request, res: Response) => {
    try {

        const { title, desc } = req.body;

        const newPost: IPost = await Post.create({
            username: "admin",
            title,
            desc,
        })

        return res.status(400).json({ message: "Post Created Succesfully", newPost });

    } catch (error) {
        return res.status(404).json({ error });
    }
}

export const test = async (req: Request, res: Response) => {
    try {
        const { username ,title, desc } = req.body;
        const uuid = uuidv4();

        const newPost: IPost = await Post.create({
            username: username,
            title: title,
            desc: desc,
            room: uuid
        })

        return res.status(200).json({ message: "Post Created Succesfully", newPost });
    } catch (error) {
        return res.status(500).json({ message: 'internal server error (!)' });
    }
}

export const getPosts = async (_req: Request, res: Response) => {
    try {
        const findPosts = await Post.find({});

        return res.json(findPosts);

    } catch (error) {
        return error;
    }
}