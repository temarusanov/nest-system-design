import { CommandBus } from '@nestjs/cqrs'
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { generateInputTypeFromZod } from 'zod-to-nestjs-graphql'

import {
    SignUpCommand,
    SignUpCommandInputSchema,
    SignUpCommandResponse,
} from './sign-up.command'

const InputType = generateInputTypeFromZod(SignUpCommandInputSchema, {
    name: 'SignUpCommandInput',
})

@Resolver()
export class SignUpResolver {
    constructor(private commandBus: CommandBus) {}

    @Mutation(() => Boolean)
    async signUp(
        @Args('input', { type: () => InputType })
        input: typeof InputType,
    ) {
        return await this.commandBus.execute<
            SignUpCommand,
            SignUpCommandResponse
        >(new SignUpCommand(input))
    }
}
