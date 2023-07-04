import { z } from "zod";

export const validationFormSchema = z.object({
    email: z
        .string()
        .nonempty("Campo Email obrigatório.")
        .email("e-mail inválido"),

    password: z
        .string()
        .nonempty("Campo Senha obrigatório.")
        .min(8, "A senha precisa de mínimo 8 caracteres")
        .regex(/(?=.*[A-Za-z])/, "É necessário ao menos uma letra")
        .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário ao menos um caráctere especial")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),

    name: z
        .string()
        .nonempty("Campo Nome obrigatório.")
        .min(2, "Nome precisa conter pelomenos 2 carácteres"),

    confirm: z
        .string()
        .min(1, "Confirmar senha é obrigatório"),

}).refine(({password, confirm}) => confirm === password, {
    message: "As senhas precisam ser iguais",
    path: ["confirm"]
}) 