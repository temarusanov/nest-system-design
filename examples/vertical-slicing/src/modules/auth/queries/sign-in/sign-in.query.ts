export class SignInCommand {
    constructor(
        readonly email: string,
        readonly password: string,
    ) {}
}

export interface SignInCommandResponse {
    accessToken: string
    refreshToken: string
    userId: string
    expiresAt: number
}
