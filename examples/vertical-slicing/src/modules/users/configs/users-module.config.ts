import { ConfigurableModuleBuilder } from '@nestjs/common'

export interface UsersConfig {
    test?: boolean
}

export const DEFAULT_USERS_CONFIG: Pick<UsersConfig, 'test'> = {
    test: false,
}

export function patchUsersConfig(
    config: Pick<typeof USERS_OPTIONS_TYPE, keyof typeof DEFAULT_USERS_CONFIG>,
) {
    return {
        ...config,
        ...DEFAULT_USERS_CONFIG,
    }
}

export const {
    ConfigurableModuleClass: UsersConfigurableModuleClass,
    MODULE_OPTIONS_TOKEN: USERS_CONFIG,
    ASYNC_OPTIONS_TYPE: USERS_ASYNC_OPTIONS_TYPE,
    OPTIONS_TYPE: USERS_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<UsersConfig, 'forRoot'>({
    optionsInjectionToken: `USERS_CONFIG`,
}).build()
