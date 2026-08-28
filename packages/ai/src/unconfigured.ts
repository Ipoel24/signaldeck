import type { AIProvider, RelevanceInput, SummarizeInput, SummaryResult, TopicExtractionInput } from "./types";

export class UnconfiguredAIProvider implements AIProvider {
  readonly name = "unconfigured";

  summarize(_input: SummarizeInput): Promise<SummaryResult> {
    return Promise.reject(new Error("AI provider is not configured yet."));
  }

  extractTopics(_input: TopicExtractionInput): Promise<string[]> {
    return Promise.reject(new Error("AI provider is not configured yet."));
  }

  scoreRelevance(_input: RelevanceInput): Promise<number> {
    return Promise.reject(new Error("AI provider is not configured yet."));
  }
}
