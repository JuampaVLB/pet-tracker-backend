import z from "zod";

const photoSchema = z.object({
    filename: z.string(),
    url: z.string(),
    blob: z.unknown(),
});


export const petSchema = z.object({
    body: z.object({
        owner: z.string()
            .nonempty('El nombre del dueño es requerido.'),
        name: z.string()
            .nonempty('El nombre de la mascota es requerido.'),
        breed: z.string()
            .nonempty('La raza es requerida.')
            .min(4, "Se necesita un minimo de 4 caracteres para la raza."),
        size: z.enum(['small', 'medium', 'big', 'verybig'], {
            errorMap: () => ({ message: 'El tamaño es requerido.' })
        }),
        photos: z.array(photoSchema)
            .nonempty()
            .min(2, "Debes seleccionar almenos 2 imagenes de tu mascota."),
        genre: z.enum(['male', 'female']),
        collar: z.boolean()
    }),
});