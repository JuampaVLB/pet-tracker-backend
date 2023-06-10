import { Request, Response } from 'express';
import Post, { IPost } from '../models/post.model';
import { v4 as uuidv4 } from 'uuid';

// export const sendPost = async (req: Request, res: Response) => {
//     try {

//         const { title, desc } = req.body;

//         const newPost: IPost = await Post.create({
//             username: "admin",
//             title,
//             desc,
//         })

//         return res.status(400).json({ message: "Post Created Succesfully", newPost });

//     } catch (error) {
//         return res.status(404).json({ error });
//     }
// }

export const sendPost = async (req: Request, res: Response) => {
    try {
        const { username ,title, desc, image } = req.body;
        const uuid = uuidv4();

        const newPost: IPost = await Post.create({
            username: username,
            title: title,
            desc: desc,
            room: uuid,
            image: image,
        })

        return res.status(200).json({ message: "Post Created Succesfully", newPost });
    } catch (error) {
        return res.status(500).json({ message: 'internal server error (!)' });
    }
}

export const sendComment = async (req: Request, res: Response) => {
    try {

        const { comment, room, username } = req.body;
        console.log(comment);
        const result = await Post.findOne({ room });

        if(!result) return res.status(404).json({ message: "Post no exits!" });
        
        let obj = {
            username,
            comment
        }

        result.comments.push(obj);

        await result.save();

        return res.status(200).json({ result, username });
    } catch (error) {
        return res.status(404).json({ error });
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

export const getComments = async (req: Request, res: Response) => {
    try {
        
        const room = req.params.room;

       const findComments = await Post.find({ room }, 'comments');

        return res.json(findComments);

    } catch (error) {
        return error;
    }
}

export const deletePost = async (req: Request, res: Response) => {
    try {
        const room = req.params.room;
        
        if(!room) return res.json("Falta una Sala");

        const deleted = await Post.findOneAndDelete({ room });

        if(!deleted) return res.json("error no se borro");

        return res.json({message: "Posteo Borrado Exitosamente", deleted});
        
    } catch (error) {
        return res.json(error);
    }
}