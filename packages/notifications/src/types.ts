export interface NotificationPayload {
  title: string;
  body: string;
  url?: string;
}

export interface AlertRule {
  id: string;
  topic?: string;
  minRelevance?: number;
  channel: string;
}

export interface NotificationProvider {
  readonly channel: string;
  send(payload: NotificationPayload): Promise<void>;
}
