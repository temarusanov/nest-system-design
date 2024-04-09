import { DynamicModule, Module, Provider, Type } from '@nestjs/common'
import {
    AUTH_CONFIG,
    AuthConfig,
    patchAuthConfig,
} from './configs/module.config'
import { SignUpController } from './commands/sign-up/sign-up.controller'
import { SignUpHandler } from './commands/sign-up/sign-up.handler'
import { SignInHandler } from './queries/sign-in/sign-in.handler'
import { SignInController } from './queries/sign-in/sign-in.controller'

@Module({})
export class AuthModule {
    static forRoot(options: AuthConfig): DynamicModule {
        const patchedConfig = patchAuthConfig(options)

        const imports: any[] = []
        const controllers = []
        const providers = []

        if (patchedConfig.commands) {
            controllers.push(...[SignUpController])
            providers.push(...[SignUpHandler])
        }

        if (patchedConfig.queries) {
            controllers.push(...[SignInController])
            providers.push(...[SignInHandler])
        }

        return {
            module: AuthModule,
            imports,
            controllers,
            providers: [
                {
                    provide: AUTH_CONFIG,
                    useValue: patchedConfig,
                },
                ...providers,
            ],
        }
    }
}
