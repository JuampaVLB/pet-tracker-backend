"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.postSchema = zod_1.default.object({
    body: zod_1.default.object({
        username: zod_1.default.string()
            .nonempty('El nombre de usuario es requerido.')
            .min(6, "Se necesita un minimo de 6 caracteres para el nombre de usuario."),
        title: zod_1.default.string()
            .nonempty('El titulo es requerido.')
            .min(4, "Se necesita un minimo de 4 caracteres para el Titulo."),
        desc: zod_1.default.string()
            .nonempty('La Descripcion es requerida.')
    }),
});
