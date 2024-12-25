import { QueryBus } from '@nestjs/cqrs'
import { Args, Query, Resolver } from '@nestjs/graphql'
import {
    generateInputTypeFromZod,
    generateObjectTypeFromZod,
} from 'zod-to-nestjs-graphql'

import {
    GetUserQuery,
    GetUserQueryInputSchema,
    GetUserQueryOutputSchema,
    GetUserQueryResponse,
} from './get-user.query'

const InputType = generateInputTypeFromZod(GetUserQueryInputSchema, {
    name: 'GetUserQueryInput',
})

const OutputType = generateObjectTypeFromZod(GetUserQueryOutputSchema, {
    name: 'GetUserQueryOutput',
})

@Resolver()
export class GetUserResolver {
    constructor(private queryBus: QueryBus) {}

    @Query(() => OutputType)
    async getUser(
        @Args('input', { type: () => InputType })
        input: typeof InputType,
    ) {
        return await this.queryBus.execute<GetUserQuery, GetUserQueryResponse>(
            new GetUserQuery(input),
        )
    }
}
