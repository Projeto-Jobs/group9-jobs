import { z } from "zod"

export const loginFormSchema = z.object({
    email: 
    z.string()
    .min(1, { message:"E-mail é obrigatório"})
    .email("e-mail inválido"),
    password: 
    z.string()
    .min(1, { message:"Senha é obrigatória"}),
})

export type TLogin = z.infer<typeof loginFormSchema>