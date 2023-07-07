import { z } from "zod"

export const SchemaEdit = z.object({
    id: z.number(),
    position: z.string(),
    sallary: z.coerce.number(),
    description: z.string()
})