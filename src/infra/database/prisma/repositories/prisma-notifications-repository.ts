import { NotificationsRepository } from '@domain/notification/application/repositories/notifications-repository';
import  { Notification } from '@domain/notification/application/entities/notification';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaNotificationMapper } from '@infra/database/mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification) {
    const raw = PrismaNotificationMapper.toPrisma(notification)

    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
