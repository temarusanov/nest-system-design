import { z } from 'zod'

export const GetUserQueryInputSchema = z.object({
    userId: z.string(),
})

export const GetUserQueryOutputSchema = z.object({
    id: z.string(),
})

export class GetUserQuery {
    constructor(readonly payload: z.infer<typeof GetUserQueryInputSchema>) {}
}

export type GetUserQueryResponse = z.infer<typeof GetUserQueryOutputSchema>
