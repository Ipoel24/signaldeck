export interface SummarizeInput {
  title: string;
  content: string;
}

export interface SummaryResult {
  whatHappened: string;
  whyItMatters: string;
  keyPoints: string[];
}

export interface TopicExtractionInput {
  title: string;
  content: string;
}

export interface RelevanceInput {
  title: string;
  content: string;
  interests?: string[];
}

export interface AIProvider {
  readonly name: string;
  summarize(input: SummarizeInput): Promise<SummaryResult>;
  extractTopics(input: TopicExtractionInput): Promise<string[]>;
  scoreRelevance(input: RelevanceInput): Promise<number>;
}
