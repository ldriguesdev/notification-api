import  { Notification } from "@domain/notification/application/entities/notification";

export class NotificationPresenter {
  static httpTo(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content,
      category: notification.category,
      recipientId: notification.recipientId
    }
  }
}