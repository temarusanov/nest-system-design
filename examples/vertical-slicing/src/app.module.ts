import { Module } from '@nestjs/common'
import { AuthModule } from './modules/auth/auth.module'
import { CqrsModule } from '@nestjs/cqrs'

@Module({
    imports: [
        CqrsModule.forRoot(),
        AuthModule.forRoot({
            queries: true,
            commands: false,
        }),
    ],
    providers: [],
    controllers: [],
})
export class AppModule {}
