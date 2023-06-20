"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.petSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.petSchema = zod_1.default.object({
    body: zod_1.default.object({
        owner: zod_1.default.string()
            .nonempty('El nombre del dueño es requerido.'),
        name: zod_1.default.string()
            .nonempty('El nombre de la mascota es requerido.'),
        breed: zod_1.default.string()
            .nonempty('La raza es requerida.')
            .min(4, "Se necesita un minimo de 4 caracteres para la raza."),
        size: zod_1.default.enum(['small', 'medium', 'big', 'verybig'], {
            required_error: 'El tamaño es requerido',
        }),
        genre: zod_1.default.enum(['male', 'female']),
        collar: zod_1.default.boolean()
    }),
});
