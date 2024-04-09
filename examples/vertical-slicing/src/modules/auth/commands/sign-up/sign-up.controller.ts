import { Body, Controller, Post } from '@nestjs/common'
import { SignUpCommand, SignUpCommandResponse } from './sign-up.command'
import { CommandBus } from '@nestjs/cqrs'

@Controller()
export class SignUpController {
    constructor(private readonly commandBus: CommandBus) {}

    @Post('/signUp')
    async signUp(@Body() body: SignUpCommand) {
        return await this.commandBus.execute<
            SignUpCommand,
            SignUpCommandResponse
        >(new SignUpCommand(body.email, body.password))
    }
}
