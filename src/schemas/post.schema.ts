import z from "zod";

export const postSchema = z.object({
    body: z.object({
        username: z.string()
            .nonempty('El nombre de usuario es requerido.')
            .min(6, "Se necesita un minimo de 6 caracteres para el nombre de usuario."),
        title: z.string()
            .nonempty('El titulo es requerido.')
            .min(4, "Se necesita un minimo de 4 caracteres para el Titulo."),
        desc: z.string()
            .nonempty('La Descripcion es requerida.')
    }),
});

