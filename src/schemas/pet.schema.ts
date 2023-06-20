import z from "zod";

    

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
            required_error: 'El tamaño es requerido',
          }),
        genre: z.enum(['male', 'female']),
        collar: z.boolean()
        }),
});