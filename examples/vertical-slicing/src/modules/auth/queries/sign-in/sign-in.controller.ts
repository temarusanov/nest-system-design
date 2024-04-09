import { Body, Controller, Get } from '@nestjs/common'
import { SignInCommand, SignInCommandResponse } from './sign-in.query'
import { QueryBus } from '@nestjs/cqrs'

@Controller()
export class SignInController {
    constructor(private readonly queryBus: QueryBus) {}

    @Get('/signIn')
    async signIn(@Body() body: SignInCommand) {
        return await this.queryBus.execute<
            SignInCommand,
            SignInCommandResponse
        >(new SignInCommand(body.email, body.password))
    }
}
