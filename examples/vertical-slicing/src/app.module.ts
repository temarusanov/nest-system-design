import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { GetUserHandler } from './features/get-user/get-user.handler'
import { GetUserResolver } from './features/get-user/get-user.resolver'
import { SignUpHandler } from './features/sign-up/sign-up.handler'
import { SignUpResolver } from './features/sign-up/sign-up.resolver'
import { UsersModule } from './modules/users/users.module'

@Module({
    imports: [CqrsModule.forRoot(), UsersModule.forRoot({})],
    providers: [SignUpHandler, SignUpResolver, GetUserHandler, GetUserResolver],
    controllers: [],
})
export class AppModule {}
