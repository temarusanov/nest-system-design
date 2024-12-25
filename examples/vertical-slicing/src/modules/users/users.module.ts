import { DynamicModule, Module, Provider, Type } from '@nestjs/common'

import {
    USERS_CONFIG,
    USERS_OPTIONS_TYPE,
    UsersConfigurableModuleClass,
    patchUsersConfig,
} from './configs/users-module.config'

@Module({})
export class UsersModule extends UsersConfigurableModuleClass {
    static forRoot(options: typeof USERS_OPTIONS_TYPE): DynamicModule {
        const imports: any[] = []
        const controllers: Type<any>[] = []
        const providers: Provider[] = [
            {
                provide: USERS_CONFIG,
                useValue: patchUsersConfig(options),
            },
        ]

        return {
            module: UsersModule,
            imports,
            controllers,
            providers,
            exports: providers,
        }
    }
}
