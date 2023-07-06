import { z } from "zod"

export const SchemaEdit = z.object({
    position: z.string(),
    sallary: z.coerce.number(),
    description: z.string()
})