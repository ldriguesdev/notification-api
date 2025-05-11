import { Content } from "@domain/notification/application/entities/content";
import { Notification, NotificationProps } from "@domain/notification/application/entities/notification";

type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
  return   new Notification({
    category: 'social',
    content: new Content('This is a notification'),
    recipientId: 'recipient-1',
    ...override
  })
}
