export class SignUpCommand {
    constructor(
        readonly email: string,
        readonly password: string,
    ) {}
}

export interface SignUpCommandResponse {
    accessToken: string
    refreshToken: string
    userId: string
    expiresAt: number
}
