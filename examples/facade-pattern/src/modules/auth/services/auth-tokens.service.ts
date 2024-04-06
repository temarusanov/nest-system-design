import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthTokensService {
    async generateAccessToken() {}

    async generateRefreshToken() {}
}
