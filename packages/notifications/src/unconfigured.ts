import type { NotificationPayload, NotificationProvider } from "./types";

export class UnconfiguredNotificationProvider implements NotificationProvider {
  readonly channel = "unconfigured";

  send(_payload: NotificationPayload): Promise<void> {
    return Promise.reject(new Error("Notification provider is not configured yet."));
  }
}
