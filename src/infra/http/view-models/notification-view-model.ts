import  { Notification } from "@domain/notification/application/entities/notification";

export class NotificationViewModel {
  static httpTo(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content,
      category: notification.category,
      recipientId: notification.recipientId
    }
  }
}