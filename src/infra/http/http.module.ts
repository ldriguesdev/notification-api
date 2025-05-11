import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NotificationsControllers } from './controllers/notifications.controller';
import { SendNotification } from '@domain/notification/application/use-cases/send-notification';
import { CancelNotification } from '@domain/notification/application/use-cases/cancel-notification';
import { GetRecipientNotifications } from '@domain/notification/application/use-cases/get-recipient-notifications';
import { CountRecipientNotifications } from '@domain/notification/application/use-cases/count-recipient-notifications';
import { UnreadNotification } from '@domain/notification/application/use-cases/unread-notification';
import { ReadNotification } from '@domain/notification/application/use-cases/read-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsControllers],
  providers: [
    SendNotification,
    CancelNotification,
    GetRecipientNotifications,
    CountRecipientNotifications,
    UnreadNotification,
    ReadNotification,
    CancelNotification,
  ],
})
export class HttpModule {}
