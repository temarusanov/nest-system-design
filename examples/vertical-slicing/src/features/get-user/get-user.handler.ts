import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'

import { UsersService } from '../../modules/users/services/users.service'
import { GetUserQuery, GetUserQueryResponse } from './get-user.query'

@QueryHandler(GetUserQuery)
export class GetUserHandler
    implements IQueryHandler<GetUserQuery, GetUserQueryResponse>
{
    constructor(private users: UsersService) {}

    async execute({ payload }: GetUserQuery) {
        return await this.users.getUser(payload)
    }
}
