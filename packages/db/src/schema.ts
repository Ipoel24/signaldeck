import { relations } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
  unique,
  uuid,
} from "drizzle-orm/pg-core";

const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
};

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  name: text("name"),
  ...timestamps,
});

export const sources = pgTable(
  "sources",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    type: text("type").notNull(),
    url: text("url").notNull(),
    enabled: boolean("enabled").notNull().default(true),
    lastFetchedAt: timestamp("last_fetched_at", { withTimezone: true }),
    ...timestamps,
  },
  (table) => [
    index("sources_enabled_idx").on(table.enabled),
    index("sources_type_idx").on(table.type),
  ],
);

export const items = pgTable(
  "items",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    sourceId: uuid("source_id")
      .notNull()
      .references(() => sources.id, { onDelete: "cascade" }),
    externalId: text("external_id").notNull(),
    title: text("title").notNull(),
    url: text("url").notNull(),
    content: text("content"),
    summary: text("summary"),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    relevanceScore: integer("relevance_score"),
    ...timestamps,
  },
  (table) => [
    unique("items_source_external_uid").on(table.sourceId, table.externalId),
    index("items_source_id_idx").on(table.sourceId),
    index("items_published_at_idx").on(table.publishedAt),
    index("items_relevance_score_idx").on(table.relevanceScore),
  ],
);

export const topics = pgTable("topics", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const itemTopics = pgTable(
  "item_topics",
  {
    itemId: uuid("item_id")
      .notNull()
      .references(() => items.id, { onDelete: "cascade" }),
    topicId: uuid("topic_id")
      .notNull()
      .references(() => topics.id, { onDelete: "cascade" }),
  },
  (table) => [
    primaryKey({ columns: [table.itemId, table.topicId] }),
    index("item_topics_topic_id_idx").on(table.topicId),
  ],
);

export const sourcesRelations = relations(sources, ({ many }) => ({
  items: many(items),
}));

export const itemsRelations = relations(items, ({ one, many }) => ({
  source: one(sources, {
    fields: [items.sourceId],
    references: [sources.id],
  }),
  itemTopics: many(itemTopics),
}));

export const topicsRelations = relations(topics, ({ many }) => ({
  itemTopics: many(itemTopics),
}));

export const itemTopicsRelations = relations(itemTopics, ({ one }) => ({
  item: one(items, {
    fields: [itemTopics.itemId],
    references: [items.id],
  }),
  topic: one(topics, {
    fields: [itemTopics.topicId],
    references: [topics.id],
  }),
}));

export type User = typeof users.$inferSelect;
export type Source = typeof sources.$inferSelect;
export type NewSource = typeof sources.$inferInsert;
export type Item = typeof items.$inferSelect;
export type NewItem = typeof items.$inferInsert;
export type Topic = typeof topics.$inferSelect;
export type ItemTopic = typeof itemTopics.$inferSelect;
