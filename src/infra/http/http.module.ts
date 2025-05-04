import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NotificationsControllers } from './controllers/notifications.controller';
import { SendNotification } from '@domain/notification/application/use-cases/send-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsControllers],
  providers: [SendNotification],
})
export class HttpModule {}
