import { DynamicModule, Module, Provider, Type } from '@nestjs/common'
import { AuthUserService } from './services/auth-user.service'
import { AuthTokensService } from './services/auth-tokens.service'
import { AuthFacadeService } from './services/auth-facade.service'

@Module({})
export class AuthModule {
    static forRoot(options: unknown): DynamicModule {
        const imports: any[] = []

        const controllers: Type<any>[] = []

        const providers: Provider[] = [
            AuthUserService,
            AuthTokensService,
            AuthFacadeService,
        ]

        return {
            module: AuthModule,
            imports,
            controllers,
            providers,
            exports: [
                AuthFacadeService, // <-- Module exports only its public API
            ],
        }
    }
}
