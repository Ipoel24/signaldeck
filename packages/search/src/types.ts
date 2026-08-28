export interface SearchQuery {
  q: string;
  sourceIds?: string[];
  topicSlugs?: string[];
  minRelevance?: number;
  limit?: number;
}

export interface SearchDocument {
  id: string;
  title: string;
  url: string;
  content?: string;
  summary?: string;
}

export interface SearchHit {
  itemId: string;
  title: string;
  url: string;
  snippet: string;
  score: number;
}

export interface SearchProvider {
  index(documents: SearchDocument[]): Promise<void>;
  search(query: SearchQuery): Promise<SearchHit[]>;
}
