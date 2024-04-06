import { Module } from '@nestjs/common'
import { AuthModule } from './modules/auth/auth.module'

@Module({
    imports: [AuthModule.forRoot({})],
    providers: [],
    controllers: [],
})
export class AppModule {}
