import { z } from "zod"

export const validationVacancySchema = z.object({
    position: z
        .string()
        .nonempty("É preciso informar o cargo."),

    sallary: z.coerce
        .number(),

    description: z
        .string()
        .nonempty("É preciso informar a descrição do cargo."),
})