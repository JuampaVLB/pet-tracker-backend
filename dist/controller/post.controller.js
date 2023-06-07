"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.getComments = exports.getPosts = exports.sendComment = exports.sendPost = void 0;
const post_model_1 = __importDefault(require("../models/post.model"));
const uuid_1 = require("uuid");
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
const sendPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, title, desc } = req.body;
        const uuid = (0, uuid_1.v4)();
        const newPost = yield post_model_1.default.create({
            username: username,
            title: title,
            desc: desc,
            room: uuid
        });
        return res.status(200).json({ message: "Post Created Succesfully", newPost });
    }
    catch (error) {
        return res.status(500).json({ message: 'internal server error (!)' });
    }
});
exports.sendPost = sendPost;
const sendComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { comment, room, username } = req.body;
        console.log(comment);
        const result = yield post_model_1.default.findOne({ room });
        if (!result)
            return res.status(404).json({ message: "Post no exits!" });
        let obj = {
            username,
            comment
        };
        result.comments.push(obj);
        yield result.save();
        return res.status(200).json({ result, username });
    }
    catch (error) {
        return res.status(404).json({ error });
    }
});
exports.sendComment = sendComment;
const getPosts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findPosts = yield post_model_1.default.find({});
        return res.json(findPosts);
    }
    catch (error) {
        return error;
    }
});
exports.getPosts = getPosts;
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = req.params.room;
        const findComments = yield post_model_1.default.find({ room }, 'comments');
        return res.json(findComments);
    }
    catch (error) {
        return error;
    }
});
exports.getComments = getComments;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = req.params.room;
        if (!room)
            return res.json("Falta una Sala");
        const deleted = yield post_model_1.default.findOneAndDelete({ room });
        if (!deleted)
            return res.json("error no se borro");
        return res.json({ message: "Posteo Borrado Exitosamente", deleted });
    }
    catch (error) {
        return res.json(error);
    }
});
exports.deletePost = deletePost;
