import { Module } from '@nestjs/common'
import { AuthModule } from './modules/auth/auth.module'
import { NotificationsModule } from './modules/notifications/notifications.module'

@Module({
    imports: [
        AuthModule.forRoot({}),
        NotificationsModule.forRoot({})
    ],
    providers: [],
    controllers: [],
})
export class AppModule {}
