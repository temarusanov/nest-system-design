import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { SignInCommand, SignInCommandResponse } from './sign-in.query'

@CommandHandler(SignInCommand)
export class SignInHandler implements ICommandHandler<SignInCommand> {
    async execute(command: SignInCommand): Promise<SignInCommandResponse> {
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
