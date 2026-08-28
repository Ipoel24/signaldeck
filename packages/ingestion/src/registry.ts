import type { SourceConnector } from "./types";

export class ConnectorRegistry {
  private readonly connectors = new Map<string, SourceConnector>();

  register(connector: SourceConnector): void {
    this.connectors.set(connector.type, connector);
  }

  get(type: string): SourceConnector | undefined {
    return this.connectors.get(type);
  }

  list(): SourceConnector[] {
    return [...this.connectors.values()];
  }
}
