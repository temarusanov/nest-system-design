import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {
    async createUser(payload: { name: string; password: string }) {
        // some logic here
    }

    async getUser(payload: { userId: string }) {
        // some logic here

        return {
            id: '1',
        }
    }
}
