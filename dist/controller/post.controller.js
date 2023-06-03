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
exports.getPosts = exports.test = exports.sendPost = void 0;
const post_model_1 = __importDefault(require("../models/post.model"));
const uuid_1 = require("uuid");
const sendPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, desc } = req.body;
        const newPost = yield post_model_1.default.create({
            username: "admin",
            title,
            desc,
        });
        return res.status(400).json({ message: "Post Created Succesfully", newPost });
    }
    catch (error) {
        return res.status(404).json({ error });
    }
});
exports.sendPost = sendPost;
const test = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.test = test;
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
