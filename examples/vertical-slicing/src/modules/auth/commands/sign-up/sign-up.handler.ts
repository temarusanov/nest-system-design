import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { SignUpCommand, SignUpCommandResponse } from './sign-up.command'

@CommandHandler(SignUpCommand)
export class SignUpHandler implements ICommandHandler<SignUpCommand> {
    async execute(command: SignUpCommand): Promise<SignUpCommandResponse> {
        const { email, password } = command

        console.log(email, password)

        return {
            accessToken: 'token',
            refreshToken: 'token',
            userId: 'id',
            expiresAt: 100,
        }
    }
}
