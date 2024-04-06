import { Injectable } from '@nestjs/common'
import { NotificationsEmailService } from './notifications-email.service'
import { NotificationsWebService } from './notifications-web.service'
import { NotificationsDiscordService } from './notifications-discord.service'

@Injectable()
export class NotificationsFacadeService {
    constructor(
        private readonly email: NotificationsEmailService,
        private readonly web: NotificationsWebService,
        private readonly discord: NotificationsDiscordService,
    ) {}

    // Functions will be available as module's public API

    async sendNotification(payload: any) {
        const { type } = payload

        if (type === 'EMAIL') {
            await this.email.send(payload)
        }

        if (type === 'WEB') {
            await this.web.send(payload)
        }

        if (type === 'DISCORD') {
            await this.discord.send(payload)
        }
    }
}
