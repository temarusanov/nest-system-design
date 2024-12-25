import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'

import { UsersService } from '../../modules/users/services/users.service'
import { SignUpCommand, SignUpCommandResponse } from './sign-up.command'

@CommandHandler(SignUpCommand)
export class SignUpHandler
    implements ICommandHandler<SignUpCommand, SignUpCommandResponse>
{
    constructor(private users: UsersService) {}

    async execute({ payload }: SignUpCommand) {
        const user = await this.users.createUser(payload)

        // generate tokens

        return {
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
        }
    }
}
