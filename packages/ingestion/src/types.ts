export type SourceType = "rss" | "github" | "website";

export interface SourceRef {
  id: string;
  type: SourceType | string;
  url: string;
  name: string;
}

export interface NormalizedItem {
  externalId: string;
  title: string;
  url: string;
  content?: string;
  publishedAt?: Date;
}

export interface SourceConnector {
  readonly type: string;
  fetch(source: SourceRef): Promise<NormalizedItem[]>;
}
