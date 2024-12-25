import { z } from 'zod'

export const SignUpCommandInputSchema = z.object({
    name: z.string(),
    password: z.string(),
})

export const SignUpCommandOutputSchema = z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
})

export class SignUpCommand {
    constructor(readonly payload: z.infer<typeof SignUpCommandInputSchema>) {}
}

export type SignUpCommandResponse = z.infer<typeof SignUpCommandOutputSchema>
