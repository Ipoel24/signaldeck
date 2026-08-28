import type { SearchDocument, SearchHit, SearchProvider, SearchQuery } from "./types";

export class UnconfiguredSearchProvider implements SearchProvider {
  index(_documents: SearchDocument[]): Promise<void> {
    return Promise.reject(new Error("Search provider is not configured yet."));
  }

  search(_query: SearchQuery): Promise<SearchHit[]> {
    return Promise.reject(new Error("Search provider is not configured yet."));
  }
}
