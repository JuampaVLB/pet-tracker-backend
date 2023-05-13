"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = exports.loginSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.loginSchema = zod_1.default.object({
    username: zod_1.default.string().nonempty('Username is required').min(6),
    password: zod_1.default.string().nonempty('Password is required').min(6)
});
exports.registerSchema = zod_1.default.object({
    username: zod_1.default.string().nonempty('Username is required').min(6),
    password: zod_1.default.string().nonempty('Password is required').min(6),
    email: zod_1.default.string().nonempty('Email is required').email()
});
