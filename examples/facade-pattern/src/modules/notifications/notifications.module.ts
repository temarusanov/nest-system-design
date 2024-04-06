import { DynamicModule, Module, Provider, Type } from '@nestjs/common'
import { NotificationsWebService } from './services/notifications-web.service'
import { NotificationsFacadeService } from './services/notifications-facade.service'
import { NotificationsEmailService } from './services/notifications-email.service'
import { NotificationsDiscordService } from './services/notifications-discord.service'

@Module({})
export class NotificationsModule {
    static forRoot(options: unknown): DynamicModule {
        const imports: any[] = []

        const controllers: Type<any>[] = []

        const providers: Provider[] = [
            NotificationsFacadeService,
            NotificationsWebService,
            NotificationsEmailService,
            NotificationsDiscordService,
        ]

        return {
            module: NotificationsModule,
            imports,
            controllers,
            providers,
            exports: [
                NotificationsFacadeService, // <-- Module exports only its public API
            ],
        }
    }
}
