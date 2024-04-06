import { Injectable } from '@nestjs/common'
import { AuthTokensService } from './auth-tokens.service'
import { AuthUserService } from './auth-user.service'

@Injectable()
export class AuthFacadeService {
    constructor(
        private readonly tokens: AuthTokensService,
        private readonly user: AuthUserService,
    ) {}

    // Functions will be available as module's public API

    async signIn() {
        await this.user.createUser()
        await this.tokens.generateAccessToken()
        await this.tokens.generateRefreshToken()
    }
}
